<script>
import TheHeader from './components/TheHeader.vue'
import TheTodoList from './components/TheTodoList.vue'

export default {
  components: {
    TheHeader,
    TheTodoList
  },
  data() {
    return {
      darkModeEnabled: false
    }
  }
}
</script>

<template>
  <div :class="{ 'dark': darkModeEnabled }">
    <div
      class="flex min-h-screen flex-col bg-very-light-gray font-josefin-sans text-sm text-very-dark-grayish-blue dark:bg-dt-very-dark-blue dark:text-dt-light-grayish-blue md:text-lg"
    >
      <TheHeader @toggle-dark-mode="darkModeEnabled = !darkModeEnabled" />

      <main class="flex-1 -translate-y-24 md:-translate-y-36">
        <TheTodoList />

        <p
          class="mt-10 text-center text-sm text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue md:mt-14"
        >
          Drag and drop to reorder list
        </p>
      </main>

      <footer class="pb-1 text-center text-sm text-dark-grayish-blue">
        <span>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            class="underline hover:text-bright-blue"
            >Frontend Mentor</a
          >.
        </span>

        <span class="whitespace-pre"
          >Coded by
          <a href="https://github.com/danaYatsuta" class="underline hover:text-bright-blue"
            >Dana Yatsuta</a
          >.</span
        >
      </footer>
    </div>
  </div>
</template>
