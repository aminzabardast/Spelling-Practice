<template>
    <div>
        <div>
            <slot></slot>
            <Loading v-if="isLoading" :width="60"/>
        </div>
        <div>
            <Button
                v-for="button in props.buttons"
                v-bind:key="button.text"
                @click="button.action()"
            >
                {{ button.text}}
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Loading from '@/components/LoadingOverlay.vue'
import Button from '@/components/BlockButton.vue'
import { ref } from 'vue'
import { type GoogleClass } from '@/GoogleTypes'

declare global {
  var google: GoogleClass
}

export type SlideButton = {
    text: string
    action: Function
}

export interface Props {
    buttons?: SlideButton[]
}

const props = withDefaults(defineProps<Props>(), {
    buttons: () => []
})

const isLoading = ref(false)
</script>

<style scoped>
main {
    max-width: 800px;
    margin-left:auto;
    margin-right:auto;
    padding: 10px;
}
</style>
