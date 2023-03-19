<template>
  <header class="header" v-header-directive>
    <div class="container header__container">
      <a href="/" class="header__brand">Mahmoud Alawad</a>
      <NavBar />
    </div>
  </header>
</template>

<script setup>
import NavBar from './NavBar.vue'
import { gsap } from 'gsap'
import { tl } from '../../utils/timeline'

const vHeaderDirective = {
  mounted: (el) => {
    const links = el.querySelectorAll('.navbar li')
    const logo = el.querySelectorAll('.header__brand')

    tl.to(el, { '--borderWidth': '100%', ease: 'slow' })
    tl.to(logo, { opacity: 1, stagger: 0.4 }, '0.2')
    tl.to(links, { opacity: 1, stagger: 0.4 }, '0.2')
  }
}
</script>

<style lang="scss">
.header {
  padding: 10px 0;
  border-bottom-color: $primary;
  position: relative;
  --borderWidth: 0%;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 100%;
    width: var(--borderWidth);
    height: 1px;
    background-color: $primary;
    transition: all 0.4s linear;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__brand {
    font-size: 1.4rem;
    opacity: 0;
  }
}
</style>
