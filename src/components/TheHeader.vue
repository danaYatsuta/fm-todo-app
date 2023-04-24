<script>
import IconMoon from './icons/IconMoon.vue'

export default {
  components: {
    IconMoon
  }
}
</script>

<template>
  <header
    class="mx-auto h-[200px] w-full max-w-screen-2xl bg-mobile-light px-6 pt-12 xs:bg-desktop-light md:h-[300px] md:pt-20"
  >
    <nav class="mx-auto flex w-full max-w-xl items-start justify-between">
      <a href="#" class="text-2xl font-bold uppercase tracking-[0.4em] text-white md:text-4xl"
        >Todo</a
      >

      <button aria-label="Toggle night mode" class="aspect-square w-6 md:w-8"><IconMoon /></button>
    </nav>
  </header>
</template>
