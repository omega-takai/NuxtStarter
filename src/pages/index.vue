<template>
  <div class="root">
    <NuxtLogo></NuxtLogo>
    <ul>
      <li>
        <NuxtLink to="/">Home page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/karte">Play Ground For Karte</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
<style lang="scss" scoped>
.root {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  padding: 40px 0;
  grid-auto-rows: min-content;
}
</style>
