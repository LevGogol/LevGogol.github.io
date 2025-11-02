<script setup lang="ts">
import PlayableAdsList from './components/PlayableAdsList.vue'
import SiteAvatar from './components/Avatar.vue'
import SocialLinks from './components/SocialLinks.vue'
</script>

<template>
  <main class="container">
    <SiteAvatar src="/levgogol.png" alt="Lev Gogol фото" lazy />
    <SocialLinks class="social" />

    <h1>Привет, я Лев Гоголь</h1>
    <p class="lead">Съел собаку на создании интерактивной рекламы.</p>
    <PlayableAdsList heading="Playable Ads" />
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
h1 {
  font-size: 2.4rem;
  margin: 1rem 0 1rem;
  letter-spacing: 0.5px;
}
.lead {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 2rem;
}
.social {
  justify-content: center;
  margin-top: 1rem;
}
@media (max-width: 560px) {
  h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2.5rem auto;
  }
}
</style>
