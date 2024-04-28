<template>
    <button @click="onClick"><slot></slot></button>
</template>

<script setup lang="ts">
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