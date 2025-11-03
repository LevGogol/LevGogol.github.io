<script setup lang="ts">
import ItemCard from './ItemCard.vue'

interface Tool {
  title: string
  description: string
  link?: string
  technologies?: string[]
}

const tools: Tool[] = [
  {
    title: 'Get Playable',
    description:
      'Расширение для браузера с <a href="https://github.com/LevGogol/get_playable" target="_blank" rel="noopener">открытым исходным кодом</a>. Позволяет получить ссылку на полноэкранные playable ads из Sensortower и Appmagic.',
    technologies: ['javascript', 'chrome extension'],
    link: 'https://chromewebstore.google.com/detail/get-playable/ihcleanhlnbbgodmgjcjoklpeckmhaop',
  },
  {
    title: 'Video to Playable',
    description:
      'Конвертирует видео в playable ads. С ним создание playable занимает всего несколько минут. <a href="https://appmagic.rocks/api/v2/dmint/proxy/mraid-proxy.dmint.dev/4/41/419/4192/4192c/4192c3/4192c3c1-e01d-4d03-b78e-5c9c408de974/index.html" target="_blank" rel="noopener">Пример</a>',
    technologies: ['TypeScript', 'Vue.js', 'Node.js', 'FFmpeg', 'Vite'],
  },
  {
    title: 'Asset Optimizer',
    description:
      'Использует самые оптимальные алгоритмы сжатия для изображений, моделей и аудио в Cocos Creator. Ограничение в 5 МБ на размер проекта больше не проблема!',
    technologies: ['TypeScript', 'Cocos Creator', 'Node.js'],
  },
]
</script>

<template>
  <section class="tools" aria-labelledby="tools-heading">
    <ul class="tools-list">
      <ItemCard
        v-for="tool in tools"
        :key="tool.title"
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
