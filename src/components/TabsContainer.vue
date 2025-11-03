<script setup lang="ts">
import { ref } from 'vue'
import PlayableAdsList from './PlayableAdsList.vue'
import ToolsList from './ToolsList.vue'

const activeTab = ref('tools')

const tabs = [
  { id: 'tools', label: 'Инструменты' },
  { id: 'playables', label: 'Playable Ads' },
]

function setActiveTab(tabId: string) {
  activeTab.value = tabId
}
</script>

<template>
  <div class="tabs-container">
    <nav class="tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-button', { active: activeTab === tab.id }]"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </nav>

    <div class="tab-content">
      <div v-if="activeTab === 'tools'" class="tab-panel">
        <ToolsList />
      </div>

      <div v-if="activeTab === 'playables'" class="tab-panel">
        <PlayableAdsList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  width: 100%;
}

.tabs-nav {
  display: flex;
  gap: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e5e5e5;
}

.tab-button {
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: #666;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  font-weight: 500;
}

.tab-button:hover {
  color: #333;
  background-color: #f8f9fa;
}

.tab-button.active {
  color: #333;
  border-bottom-color: #007acc;
  background-color: #fff;
}

.tab-content {
  min-height: 200px;
}

@media (max-width: 560px) {
  .tab-button {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }

  .tabs-nav {
    margin-bottom: 1.5rem;
  }
}
</style>
