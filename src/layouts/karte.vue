<template>
  <div class="karte-wrapper">
    <div class="karte-inner">
      <div class="karte-widget__backdrop" />
      <div class="karte-widget__container">
        <div class="karte-widget__content">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// stylelint-disable selector-class-pattern
.karte-wrapper {
  .karte-inner {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2147483640;
    display: block;
    background-size: cover;
    background-image: url(https://picsum.photos/600);
    background-position: 0 0;
    background-repeat: no-repeat;

    .karte-widget__backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2147483641;
      margin: -50%;
      background-color: rgb(0 0 0 / 60%);
    }

    .karte-widget__container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2147483642;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100%;
      min-height: 100%;
      overflow: auto;

      .karte-widget__content {
        box-sizing: border-box;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
