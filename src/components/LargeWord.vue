<template>
  <h1 class="largeWord">
    <div class="largeWord__text">{{ text }}</div>
  </h1>
</template>

<script setup>
const props = defineProps({
  text: String
})
</script>

<style lang="scss">
.largeWord {
  width: 100%;
  display: flex;
  font-size: clamp(3.5rem, 12vw + 1rem, 12rem);
  transform-origin: 0 50%;

  &__text {
    width: 100%;
  }
}
</style>
