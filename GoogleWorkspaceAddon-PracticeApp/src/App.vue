<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'
import debounce from 'lodash.debounce'
import {
  MainBody as Body,
  LoadingOverlay as Loading,
  BlockButton as Button
} from 'component-library'

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
    <Button @click="loadForTwoSeconds()">Initiate Loading</Button>
  </Body>
  <Loading v-if="isLoading" :width="60"/>
</template>
