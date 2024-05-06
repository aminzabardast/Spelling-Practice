<template>
    <button @click="onClick" :disabled="props.disabled"><slot></slot></button>
</template>

<script setup lang="ts">
export interface Props {
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => {
    emit('click')
}
</script>

<style scoped>
button {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
}
</style>