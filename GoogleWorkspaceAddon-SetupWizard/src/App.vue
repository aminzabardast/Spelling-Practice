<script setup lang="ts">
import Body from '@/components/MainBody.vue'
import Page from '@/components/PageSlide.vue'
import Loading from '@/components/LoadingOverlay.vue'
import debounce from 'lodash.debounce'
import isUndefined from 'lodash.isundefined'
import { ref, type Ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'
import Button from '@/components/BlockButton.vue'

declare global {
  var google: GoogleClass
}

const isLoading = ref(false)
const activePage = ref('home')
const body: Ref<HTMLElement | undefined> = ref()
const isMetaChecked = ref(false)
const doesMetaExist = ref(false)

type page = 'home' | 'meta'

const createDisableLoadingDebouncer = (seconds: number, callBack: Function | undefined) => {
    return debounce(() => {
        isLoading.value = false
        if (!isUndefined(callBack)) {
          callBack()
        }
    }, seconds * 1000)
}

const goToPage = (page: page) => {
  activePage.value = page
  window.scrollTo(0, 0)
}

const mockCheckMeta = createDisableLoadingDebouncer(1, () => {
  console.log('DEV LOG: Meta Checked')
  isLoading.value = false
  isMetaChecked.value = true
})
const checkMeta = () => {
  isLoading.value = true
  if (import.meta.env.PROD) {
      // TODO: Check Meta Here
      // FIXME: Following is temperory
      google.script.run.withSuccessHandler(
        () => {
          isLoading.value = false
          isMetaChecked.value = true
        }
      ).doSomething()
  } else {
    mockCheckMeta()
  }
}

const mockCreateMeta = createDisableLoadingDebouncer(1, () => {
  console.log('DEV LOG: Meta Created')
  isLoading.value = false
  doesMetaExist.value = true
})
const createMeta = () => {
  isLoading.value = true
  if (import.meta.env.PROD) {
      // TODO: Create Meta Here
      // FIXME: Following is temperory
      google.script.run.withSuccessHandler(
        () => {
          isLoading.value = false
          doesMetaExist.value = true
        }
      ).doSomething()
  } else {
    mockCreateMeta()
  }
}
</script>

<template>
  <Body ref="body">
    <Page v-if="activePage === 'home'">
      <template #title>What is this wizard?</template>
      <p>This wizard is here to help you setup the Addon. The steps are:</p>
      <ol>
        <li>Make sure that Metadata sheet exists.</li>
        <li>Populate the Metadata sheet with:</li>
        <ol>
          <li>Words Column.</li>
          <li>Tracking Information: Number of Correct and Incorrect Evaluation.</li>
        </ol>
      </ol>
      <template #footer>
        <Button>Some Action</Button>
        <Button @click="goToPage('meta')">Meta Data Sheet</Button>
      </template>
    </Page>
    <Page v-if="activePage === 'meta'">
      <template #title>Meta Data Sheet</template>
      <template #footer>
        <Button @click="checkMeta()" :disabled="isMetaChecked">Check Meta</Button>
        <Button @click="createMeta()" :disabled="!isMetaChecked || doesMetaExist">Create Meta</Button>
        <Button @click="goToPage('home')">Back to Home</Button>
      </template>
    </Page>
  </Body>
  <Loading v-if="isLoading" :width="60"/>
</template>
