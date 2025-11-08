<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  src: string;
}

const { src } = defineProps<IProps>();
const dimension = 160;
const rotationTime = 600;

const isSpinning = ref(false);
const isHovered = ref(false);

const handleClick = (): void => {
  if (isSpinning.value) {
    return;
  }
  isSpinning.value = true;
  setTimeout(() => {
    isSpinning.value = false;
  }, rotationTime);
};

const handleMouseEnter = (): void => {
  isHovered.value = true;
};

const handleMouseLeave = (): void => {
  isHovered.value = false;
};

defineOptions({ name: 'SiteAvatar' });
</script>

<template>
  <div class="avatar-container">
    <div :class="['avatar-shadow', { hovered: isHovered }]"></div>
    <div :class="['avatar-scale-container', { hovered: isHovered }]">
      <img
        :src="src"
        :width="dimension"
        :height="dimension"
        :class="['avatar', { spinning: isSpinning }]"
        draggable="false"
        loading="lazy"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  display: flex;
  justify-content: center;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.avatar-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: v-bind(dimension + 'px');
  max-height: v-bind(dimension + 'px');
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
  --scale: 1;
  transform: scale(var(--scale));
  pointer-events: none;
}

.avatar-shadow.hovered {
  --scale: 1.05;
}

.avatar-scale-container {
  width: 100%;
  height: 100%;
  max-width: v-bind(dimension + 'px');
  max-height: v-bind(dimension + 'px');
  aspect-ratio: 1 / 1;
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
}

.avatar-scale-container.hovered {
  transform: scale(1.05);
}

.avatar {
  width: 100%;
  height: 100%;
  max-width: v-bind(dimension + 'px');
  max-height: v-bind(dimension + 'px');
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  background: #eee;
  cursor: pointer;
  position: relative;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-touch-callout: none;
}

.avatar.spinning {
  animation: spin v-bind(rotationTime / 1000 + 's') ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 560px) {
  .avatar,
  .avatar-shadow,
  .avatar-scale-container {
    max-width: 130px;
    max-height: 130px;
  }
}
</style>
