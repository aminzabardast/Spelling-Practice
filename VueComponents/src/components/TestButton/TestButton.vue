<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  text: { type: String, required: false, default: 'Clicks!' }
})
const count = ref(0)
</script>

<template>
  <button @click="count++"> {{ count }} {{ props.text }} </button>
</template>

<style scoped>
button {
  padding: 20px;
  background-color: grey;
}
</style>
