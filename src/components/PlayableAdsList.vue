<script setup lang="ts">
import { PLAYABLES } from '../playables'

interface Props {
  heading?: string
  about?: string
}
const props = defineProps<Props>()
const headingText = props.heading ?? 'Playable Ads / Мини-демо'
</script>

<template>
  <section class="playables" aria-labelledby="playables-heading">
    <h2 id="playables-heading">{{ headingText }}</h2>
    <ul class="playables-list">
      <li v-for="p in PLAYABLES" :key="p.id" class="playable-item">
        <a :href="p.url" target="_blank" rel="noopener" class="playable-link">{{ p.title }}</a>
        <span class="desc">{{ p.description }}</span>
        <span v-if="p.tech?.length" class="tags">
          <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.playables-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.playable-item {
  background: #f7f9fc;
  border: 1px solid #e3e8ef;
  border-radius: 10px;
  padding: 0.9rem 1rem 0.75rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  align-items: center;
}
.playable-link {
  font-weight: 600;
  text-decoration: none;
  color: #1e3a8a;
  background: linear-gradient(90deg, #2563eb, #9333ea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.playable-link:hover {
  text-decoration: underline;
}
.playables-about {
  margin: 0 0 1.25rem;
  color: #555;
  font-size: 0.98rem;
}
.desc {
  flex: 1 1 220px;
  color: #333;
  font-size: 0.9rem;
}
.tags {
  display: flex;
  gap: 0.4rem;
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
</style>
