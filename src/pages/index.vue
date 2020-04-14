<template>
  <div class="container">
    <div>
      <TheLogo />
      <h1 class="title" v-text="'NuxtStarter'" />
      <h2 class="subtitle" v-text="'My excellent Nuxt.js project'" />
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./index.css"></style>
