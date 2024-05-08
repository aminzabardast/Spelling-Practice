<script setup lang="ts">
// TODO: These component should be shared between different apps. Find a solution.
import Body from '@/components/MainBody.vue'
import Loading from '@/components/LoadingOverlay.vue'
import { ref, type Ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'
import debounce from 'lodash.debounce'

declare global {
  var google: GoogleClass
}

const isLoading = ref(false)
const body: Ref<HTMLElement | undefined> = ref()

const disableLoadingAfterTwoSeconds = debounce(() => {
  isLoading.value = false
}, 2000)
const loadForTwoSeconds = () => {
  isLoading.value = true
  disableLoadingAfterTwoSeconds()
}
</script>

<template>
  <Body ref="body">
    <p>Example.</p>
    <button @click="loadForTwoSeconds()">Initiate Loading</button>
  </Body>
  <Loading v-if="isLoading" :width="60"/>
</template>
