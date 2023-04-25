<template>
  <div class="flex flex-col items-center">
    <h1 class="text-8xl font-semibold text-red-500">404</h1>
    <p class="my-8 text-3xl text-gray-800">Page Not Found</p>
  </div>
</template>

<script setup>
const event = useRequestEvent()
setResponseStatus(event, 404, 'Page Not Found')
</script>
