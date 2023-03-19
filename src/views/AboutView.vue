<template>
  <div class="about">
    <div class="container about__container">
      <div class="about__whoiam">
        Greetings! My name is Mahmoud, and I am a web developer hailing from Syria. My passion lies
        in crafting visually stunning and interactive user interfaces that captivate and engage
        audiences.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__whoiam {
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
    font-size: clamp(0.8rem, 12vw + 0.5rem, 2.8rem);
    text-transform: capitalize;
    line-height: 1.2;
  }
}
</style>
