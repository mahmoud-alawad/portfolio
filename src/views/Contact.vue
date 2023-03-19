<template>
  <div class="contact">
    <div class="container contact__container" v-contact-directive>
      <div class="contact__title__wrapper">
        <div class="title">Contact Me</div>
      </div>
      <form class="contact__form" v-on:submit.prevent="submitForm">
        <input
          class="contact__form__input"
          type="text"
          v-model="name"
          name="clientName"
          placeholder="name"
          @input="name = $event.target.value"
        />
        <div class="contact__form__input__error" v-if="nameErorr">please provide a valid name</div>
        <input
          class="contact__form__input"
          type="email"
          v-model="email"
          dirname="clientMail"
          placeholder="email"
          @input="email = $event.target.value"
        />
        <div class="contact__form__input__error" v-if="emailErorr">please provid a valid email</div>
        <input
          class="contact__form__input"
          type="text"
          v-model="message"
          placeholder="message"
          @input="message = $event.target.value"
        />
        <button class="link link--helike contact__form__submit" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { tl } from '../utils/timeline'
import Split from '../utils/split'
import { ref, watch } from 'vue'

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let nameErorr = ref(false)
let emailErorr = ref(false)
let messageError = ref(false)

const name = ref('')
const email = ref('')
const message = ref('')

const vContactDirective = {
  mounted: () => {
    emailjs.init(import.meta.env.VITE_SERVICE_ID)
  },
  created: (el) => {
    const form = el.querySelector('.contact__form')
    const title = el.querySelector('.contact__title__wrapper .title')
    const inputs = el.querySelectorAll('.contact__form__input')
    const submitBtn = el.querySelectorAll('.contact__form__submit')
    const titleLetters = Split(title)
    const titleLett = el.querySelectorAll('.contact__title__wrapper .title .char')

    tl.to(titleLett, { y: 0, opacity: 1, stagger: 0.1 })
    tl.to(form, { y: 0, opacity: 1 }, '<0.9')
    tl.to(inputs, { opacity: 1, stagger: 0.2 }, '<0.2')
    tl.to(submitBtn, { opacity: 1 }, '<0.6')
  }
}

const submitForm = (e) => {
  e.preventDefault()
  let formData = new FormData()

  formData.append('service_id', import.meta.env.VITE_SERVICE_ID)
  formData.append('template_id', 'template_nel837d')
  formData.append('user_id', import.meta.env.VITE_PUBLIC_KEY)
  formData.append('from_name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)

  if (name.value && email.value && message.value) {
    return true
  }

  if (!name.value || name.value.length < 3) {
    nameErorr.value = true
  } else {
    nameErorr.value = false
  }
  if (!email.value || !emailRegex.test(email.value)) {
    emailErorr.value = true
  } else {
    emailErorr.value = false
  }

  if (!nameErorr.value && !emailErorr.value) {
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData
    })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (res) {
        console.log(res)
      })
  } else {
    console.log([''])
  }
}
</script>

<style lang="scss">
.contact {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title__wrapper {
    width: 100%;
    text-align: center;
    font-size: clamp(1rem, 12vw + 0.4rem, 5rem);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    & .char {
      transform: translateY(300px);
    }
  }

  &__container {
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  &__form {
    display: flex;
    flex-wrap: wrap;
    transform: translateY(100%);

    &__input {
      width: 100%;
      margin: 0.5rem 0;
      background: transparent;
      border: 0;
      border-bottom: 1px solid;
      padding: 1rem 0.8em;
      text-align: start;
      font-size: 20px;
      font-family: inherit;
      line-height: 1.4;
      color: inherit;
      outline: none;
      opacity: 0;

      &::placeholder {
        padding-left: 3px;
        text-transform: capitalize;
        color: $gray;
      }

      &__error {
        color: red;
      }
    }

    &__submit {
      width: fit-content;
      margin: 1.2rem auto;
      font-weight: bold;
      background: none;
      border: none;
      text-align: center;
      border-bottom: 1px solid $primary;
      opacity: 0;
    }
  }
}
</style>
