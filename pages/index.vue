<template>
  <div>
    {{ store.someState }}
  </div>
</template>

<script setup>
import { useStore } from '@/stores/hello-pinia'
const store = useStore()
</script>
