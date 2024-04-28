<template>
    <div class="container">
      <div>
        <div class="loader" :style="style"></div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 40
})

const style = computed(() => {
  return {
    width: `${props.width}px`
  }
})
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}
.container > div {
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
}
.loader {
  width: 40px;
  aspect-ratio: 1;
  background: #349170;
  display: grid;
  animation: l4-0 1s infinite linear;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  background:#f77825;
  animation: inherit;
  animation-name: l4-1;
}
.loader::after {
  background: #773283;
  --s: 60deg;
}
@keyframes l4-0 {
  0%,20% {transform: rotate(0)}
  100%   {transform: rotate(90deg)}
}
@keyframes l4-1 {
  50% {transform: rotate(var(--s,30deg))}
  100% {transform: rotate(0)}
}

</style>