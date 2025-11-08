<script setup lang="ts">
interface IProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  image?: string;
}

defineProps<IProps>();
</script>

<template>
  <li class="item-card">
    <component
      :is="link ? 'a' : 'div'"
      :href="link"
      :target="link ? '_blank' : undefined"
      :rel="link ? 'noopener' : undefined"
      :class="link ? 'card-link' : 'card-content'"
    >
      <div v-if="image" class="item-image">
        <img :src="image" :alt="title" />
      </div>
      <div class="item-content">
        <span :class="['item-title', { clickable: !!link }]">{{ title }}</span>
        <span class="desc" v-html="description"></span>
        <span v-if="tags?.length" class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </span>
      </div>
    </component>
  </li>
</template>

<style scoped>
.item-card {
  background: #f7f9fc;
  border: 1px solid #e3e8ef;
  border-radius: 10px;
  position: relative;
  transition: all 0.2s ease;
}

.card-link,
.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.9rem 1rem 0.75rem;
  text-decoration: none;
  color: inherit;
}

.card-link {
  cursor: pointer;
}

.card-link:hover .item-card,
.item-card:has(.card-link:hover) {
  border-color: #2563eb;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.item-title {
  font-weight: 600;
  color: #000;
}

.item-title.clickable {
  color: #2563eb;
}

.desc {
  color: #333;
  font-size: 0.9rem;
  line-height: 1.4;
}

.desc a {
  color: #2563eb;
  text-decoration: underline;
  font-weight: 500;
}

.desc a:hover {
  color: #1d4ed8;
}

.tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.tag {
  background: #2563eb10;
  color: #1e3a8a;
  font-size: 0.65rem;
  letter-spacing: 0.5px;
  padding: 0.25rem 0.45rem;
  border: 1px solid #2563eb33;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.item-image {
  flex-shrink: 0;
  width: 100%;
  height: 120px;
  order: -1;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>
