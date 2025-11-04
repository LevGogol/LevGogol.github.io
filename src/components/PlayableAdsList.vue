<script setup lang="ts">
import playables from '../data/playables.json';
import ItemCard from './ItemCard.vue';
</script>

<template>
  <section class="playables" aria-labelledby="playables-heading">
    <ul class="playables-list">
      <ItemCard
        v-for="(playable, index) in playables"
        :key="index"
        :title="playable.title"
        :description="playable.description"
        :link="playable.link"
        :tags="playable.tech"
      />
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

.playables-about {
  margin: 0 0 1.25rem;
  color: #555;
  font-size: 0.98rem;
}
</style>
