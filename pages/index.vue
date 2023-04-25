<template>
  <div class="flex flex-col gap-4">
    <div>{{ store.someState }}{{ $t('hello') }}</div>
    <div>Mouse:{{ x }},{{ y }}</div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/hello-pinia'
const store = useStore()
const { x, y } = useMouse()
</script>
