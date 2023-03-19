<template>
  <HeaderVue />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
// https://unsplash.com/photos/sqSYr_xXeCw


// document.addEventListener('DOMContentLoaded', () => {
  // Define the animation sequence
  // // Define the animation sequence
  //   timeline.to('.spinner', { strokeDashoffset: 0, duration: 1, ease: 'power4.in' })
  //       .to('.spinner-wrapper', { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
  //       .to('.spinner', { strokeDashoffset: -251.2, duration: 1, ease: 'power4.out' })
  //       .to('.spinner-wrapper', { display: 'none', duration: 0 });
  // // Set the initial state of the loader
  //   gsap.set('.spinner', { strokeDasharray: 251.2, strokeDashoffset: 251.2 });
  // Start the animation
  // timeline.play();
  // gsap.fromTo(".spinner-container", {opacity: 0}, {opacity: 1, duration: 1});
  // gsap.fromTo(".spinner-wrapper", {scale: 0}, {scale: 1, duration: 1.2});
  // gsap.to(".spinner", {display: 'flex', duration: 1.4})
  // gsap.to(".spinner", {opacity: 1, duration: 1.8})
  // gsap.from('.spinner', {duration: 3, opacity: '0', ease: 'power4'})
// })
</script>

<style lang="scss">
#app {
  color: $primary;
}
</style>
