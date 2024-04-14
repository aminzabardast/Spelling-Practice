<script setup lang="ts">
import { ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'

defineProps<{
  msg: string
}>()

declare global {
  var google: GoogleClass
}

const isLoading = ref(false)

const doSomethingSuccess = () => {
  isLoading.value = false
}

const doSomething = () => {
  isLoading.value = true
  if (import.meta.env.PROD) {
    google.script.run.withSuccessHandler(doSomethingSuccess).doSomething()
  } else {
    console.log('doSomething')
    isLoading.value = false
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 v-if="isLoading">Loading ...</h3>
    <h3>
      This is a test SPA.
      <a @click="doSomething()">Add One Row</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

a {
  cursor: pointer;
  text-decoration: underline;
}
a:hover {
  color: aqua;
}
</style>
