<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  size?: number // px
  lazy?: boolean
}
const props = defineProps<Props>()
const dimension = props.size ?? 160
const loading = props.lazy ? 'lazy' : 'eager'
defineOptions({ name: 'SiteAvatar' })
</script>

<template>
  <div class="avatar-wrap">
    <img
      :src="src"
      :alt="alt || 'avatar'"
      :width="dimension"
      :height="dimension"
      :loading="loading"
      class="avatar"
    />
  </div>
</template>

<style scoped>
.avatar-wrap {
  display: flex;
  justify-content: center;
}
.avatar {
  width: 100%;
  height: 100%;
  max-width: v-bind(dimension + 'px');
  max-height: v-bind(dimension + 'px');
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.25);
  border: 4px solid #ffffff;
  background: #eee;
}
@media (max-width: 560px) {
  .avatar {
    max-width: 130px;
    max-height: 130px;
  }
}
</style>
