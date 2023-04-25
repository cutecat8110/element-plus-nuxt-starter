<template>
  <header class="flex h-14 justify-between shadow">
    header
    <div>
      <el-switch v-model="isDark" />
      <button
        v-for="localeItem in locales"
        :key="localeItem.code"
        type="button"
        class=""
        @click="changeLanguage(localeItem.code)"
      >
        {{ localeItem.name }}
      </button>
    </div>
  </header>
</template>

<script setup>
const { locale, locales, setLocaleCookie } = useI18n()

const changeLanguage = (localeCode) => {
  locale.value = localeCode
  setLocaleCookie(localeCode)
}

const isDark = useDark('')
</script>
