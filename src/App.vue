<script setup lang="ts">
import ProjectInfo from './components/Projects/ProjectInfo.vue';
import SiteAvatar from './components/Avatar.vue';
import SocialLinks from './components/SocialLinks.vue';
import GreetingSection from './components/GreetingSection.vue';
</script>

<template>
  <main class="container">
    <SiteAvatar src="/levgogol.webp" />
    <SocialLinks class="social" />
    <GreetingSection />
    <ProjectInfo />
  </main>
</template>

<style scoped>
.container {
  max-width: 760px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    Arial,
    sans-serif;
  line-height: 1.55;
}

.social {
  justify-content: center;
  margin-top: 1rem;
}

@media (max-width: 560px) {
  .container {
    margin: 2.5rem auto;
  }
}
</style>
