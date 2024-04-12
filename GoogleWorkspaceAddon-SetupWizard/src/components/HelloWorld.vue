<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const isLoading = ref(false)

const doSomethingSuccess = () => {
  isLoading.value = false
}

const doSomething = () => {
  isLoading.value = true
  // @ts-ignore TODO: I need to somehow tell TypeScript not to take this as an error. It should not be ignored and should have Type Definition.
  google.script.run.withSuccessHandler(doSomethingSuccess).doSomething()
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 v-if="isLoading">Loading ...</h3>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a @click="doSomething()">Google Sheets Test Function</a>.
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

a {
  cursor: pointer;
}
</style>
