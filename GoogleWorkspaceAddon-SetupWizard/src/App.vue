<script setup lang="ts">
import Body from '@/components/MainBody.vue'
import Page, {type SlideButton} from '@/components/PageSlide.vue'
import { LoremIpsum } from 'lorem-ipsum' // FIXME: Only While Dev
import Loading from '@/components/LoadingOverlay.vue'
import debounce from 'lodash.debounce'
import { ref, type Ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'

// FIXME: Only While Dev
const lorem = new LoremIpsum({}, 'html');
const PageOneContext = lorem.generateParagraphs(2)
const PageTwoContext = lorem.generateParagraphs(2)
//

declare global {
  var google: GoogleClass
}

const isLoading = ref(false)
const activePage = ref(1)
const body: Ref<HTMLElement | undefined> = ref()

const pageOneButtons: SlideButton[] = [
  {
    text: 'Some Action',
    action: () => {
      addRow()
    }
  },
  {
    text: 'Next Page',
    action: () => {
      activePage.value = 2
      window.scrollTo(0, 0)
    }
  }
]
const pageTwoButtons: SlideButton[] = [
  {
    text: 'Other Action',
    action: () => {
      addRow()
    }
  },
  {
    text: 'Previous Page',
    action: () => {
      activePage.value = 1
      window.scrollTo(0, 0)
    }
  }
]

const createDisableLoadingDebouncer = (seconds: number) => {
    return debounce(() => {
        isLoading.value = false
    }, seconds * 1000)
}
const disableLoadingAfterOneSeconds = createDisableLoadingDebouncer(1)
const addRow = () => {
    isLoading.value = true
    if (import.meta.env.PROD) {
        google.script.run.withSuccessHandler(
            () => {
                isLoading.value = false
            }
        ).doSomething()
    } else {
        console.log('DEV LOG: `google.script.run.doSomething()` is executed.')
        disableLoadingAfterOneSeconds()
    }
}
</script>

<template>
  <Body ref="body">
    <Page :buttons="pageOneButtons" v-if="activePage === 1">
      <h1>Page 1</h1>
      <div v-html="PageOneContext"></div>
    </Page>
    <Page :buttons="pageTwoButtons" v-if="activePage === 2">
      <h1>Page 2</h1>
      <div v-html="PageTwoContext"></div>
    </Page>
  </Body>
  <Loading v-if="isLoading" :width="60"/>
</template>
