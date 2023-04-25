<script>
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'

export default {
  components: {
    IconMoon,
    IconSun
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggleDarkMode')
    }
  }
}
</script>

<template>
  <header
    class="mx-auto h-[200px] w-full max-w-screen-2xl bg-mobile-light px-6 pt-12 dark:bg-mobile-dark xs:bg-desktop-light dark:xs:bg-desktop-dark md:h-[300px] md:pt-20"
  >
    <nav class="mx-auto flex w-full max-w-xl items-start justify-between">
      <a href="#" class="text-2xl font-bold uppercase tracking-[0.4em] text-white md:text-4xl"
        >Todo</a
      >

      <button @click="toggleDarkMode" aria-label="Toggle night mode" class="w-6 md:w-8">
        <IconMoon class="dark:hidden" />
        <IconSun class="hidden dark:block" />
      </button>
    </nav>
  </header>
</template>
