<template>
  <nav class="navbar">
    <li class="navbar__list">
      <RouterLink class="link link--helike" to="/about">
        <span>About</span>
      </RouterLink>
    </li>
    <li class="navbar__list">
      <RouterLink class="link link--helike" to="/contact">
        <span>Contact</span>
      </RouterLink>
    </li>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
.navbar {
  background-color: $white;
  display: flex;
  justify-content: space-evenly;

  &__list {
    width: 100%;
    height: 100%;
    margin: 0 5px;
    display: flex;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
