<script>
import TheHeader from './components/TheHeader.vue'
import TheTodoList from './components/TheTodoList.vue'

export default {
  components: {
    TheHeader,
    TheTodoList
  }
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-very-light-gray font-josefin-sans text-sm md:text-lg text-very-dark-grayish-blue"
  >
    <TheHeader />

    <main class="flex-1">
      <TheTodoList />
    </main>
  </div>
</template>
