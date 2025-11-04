<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import toolsData from '../data/tools.json'

interface Tool {
  title: string
  description: string
  link?: string
  technologies?: string[]
}

const tools: Tool[] = toolsData
</script>

<template>
  <section class="tools" aria-labelledby="tools-heading">
    <ul class="tools-list">
      <ItemCard
        v-for="(tool, index) in tools"
        :key="index"
        :title="tool.title"
        :description="tool.description"
        :link="tool.link"
        :tags="tool.technologies"
      />
    </ul>
  </section>
</template>

<style scoped>
.tools-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
