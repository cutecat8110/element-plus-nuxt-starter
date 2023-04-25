export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('pinia')
    return { someState }
  },
  {
    persist: true
  }
)
