<script setup>
import Github from './icons/Github.vue'
import Twitter from './icons/Twitter.vue'
import Linkedin from './icons/Linkedin.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__menu">
        <a class="footer__menu__link" href="github"><Github /></a>
        <a class="footer__menu__link" href="github"><Twitter /></a>
        <a class="footer__menu__link" href="github"><Linkedin /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &__menu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &__link {
      width: min(3rem, 16%);
      height: min(3rem, 16%);
    }
  }
}
</style>
