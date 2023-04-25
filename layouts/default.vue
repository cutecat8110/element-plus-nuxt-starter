<template>
  <div class="flex min-h-screen flex-col">
    <PageHeader />
    <main class="flex-1">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>
