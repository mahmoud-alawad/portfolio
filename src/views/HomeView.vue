<script setup>
import { gsap } from 'gsap'
import split from '@/utils/split.js'
import Footer from '../components/Footer.vue'
import { tl } from '../utils/timeline'
const vHomeDirective = {
  created: (el) => {
    const textWrapper = el.querySelectorAll('.home__intro')
    const welcome = el.querySelector('.home__intro__welcome')
    const helloText = split(welcome)
    const chars = el.querySelectorAll('.home__intro__welcome .char')

    tl.to(textWrapper, { y: 0, opacity: 1, duration: 1 })
    tl.to(chars, { y: 0, stagger: 0.1, duration: 0 })
  }
}
</script>

<template>
  <main v-home-directive class="home">
    <div class="container home__container">
      <div class="home__intro">
        <h1 class="home__intro__welcome">Web Developer</h1>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.home {
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__continer {
  }
  &__intro {
    transform: translateY(1900px);
    text-align: center;

    &__welcome {
      font-size: clamp(1.8rem, 12vw + 0.5rem, 10rem);
      text-align: center;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      overflow: hidden;
      & .char {
        font-weight: normal;
        text-transform: capitalize;
        transform: translateY(200px);
        transition: transform 0.5s;
      }
    }

    &__prev__description {
      padding: 0 1%;
      font-size: clamp(1rem, 12vw + 0.6rem, 6rem);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      text-transform: capitalize;
      & .word {
        text-transform: capitalize;
        transform: translateY(500px);
        transition: transform 0.5s;
      }
    }
  }
}
</style>
