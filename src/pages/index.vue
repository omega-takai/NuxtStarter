<template>
  <div class="container">
    <div>
      <TheLogo />
      <h1 class="title" v-text="'NuxtStarter'" />
      <h2 class="subtitle" v-text="'My excellent Nuxt.js project'" />
      <div class="links">
        <BaseButton
          link-url="https://nuxtjs.org/"
          button-text="Documentation"
          color-type="green"
          target="_blank"
        />
        <BaseButton
          link-url="https://github.com/nuxt/nuxt.js"
          button-text="GitHub"
          color-type="grey"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./index.css"></style>
