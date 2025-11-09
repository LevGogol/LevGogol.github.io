<script setup lang="ts">
import { Icon } from '@iconify/vue';
const size = 32;
const links = [
  {
    href: 'https://github.com/LevGogol',
    icon: 'mdi:github',
  },
  {
    href: 'https://www.linkedin.com/in/levgogol/',
    icon: 'mdi:linkedin',
  },
  {
    href: 'https://t.me/LevGogol',
    icon: 'mdi:telegram',
  },
  {
    href: 'mailto:levgogol@gmail.com',
    icon: 'mdi:email',
  },
];
</script>

<template>
  <div class="social-wrapper">
    <h2 class="social-heading">Connect with Me</h2>
    <nav class="social" aria-label="Social media links">
      <a v-for="l in links" :key="l.href" :href="l.href" target="_blank" class="social-btn">
        <Icon :icon="l.icon" :width="size" />
      </a>
    </nav>
  </div>
</template>

<style scoped>
.social-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  width: 100%;
  margin-top: 1rem;
}
.social-heading {
  font-size: 1.15rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 0 0;
}
.social {
  display: flex;
  gap: 0.5rem 1rem;
}
.social-btn {
  width: v-bind(size + 'px');
  height: v-bind(size + 'px');
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f1f5f9;
  color: #0f172a;
  text-decoration: none;
  box-shadow: 0 4px 12px -3px rgba(0, 0, 0, 0.12);
  transition:
    background 0.25s,
    transform 0.25s,
    box-shadow 0.25s;
  position: relative;
}
.social-btn:hover {
  background: #e2e8f0;
  transform: translateY(-3px);
  box-shadow: 0 8px 18px -6px rgba(0, 0, 0, 0.25);
}
.social-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px -3px rgba(0, 0, 0, 0.18);
}
/* Icon size handled inline by width/height binding */
@media (prefers-color-scheme: dark) {
  .social-btn {
    background: #1e293b;
    color: #e2e8f0;
    box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.5);
  }
  .social-btn:hover {
    background: #334155;
  }
}
</style>
