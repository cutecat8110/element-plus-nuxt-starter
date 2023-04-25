<template>
  <div>
    {{ store.someState }}
    {{ $t('hello') }}
  </div>
</template>

<script setup>
import { useStore } from '@/stores/hello-pinia'
const store = useStore()
</script>
