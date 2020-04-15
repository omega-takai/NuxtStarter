<template lang="pug">
  div(:class="$style.container")
    div
      TheLogo
      h1(:class="$style.title") NuxtStarter
      h2(:class="$style.subtitle") My excellent Nuxt.js project
      div(:class="$style.links")
        BaseButton(
          link-url="https://ja.nuxtjs.org/guide"
          button-text="Documentation"
          color-type="green"
          target="_blank"
        )
        BaseButton(
          link-url="https://github.com/t--takai/NuxtStarter"
          button-text="GitHub"
          color-type="grey"
          target="_blank"
        )
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" module src="./index.scss"></style>
