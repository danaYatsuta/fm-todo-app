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
    class="flex min-h-screen flex-col bg-very-light-gray font-josefin-sans text-sm text-very-dark-grayish-blue md:text-lg"
  >
    <TheHeader />

    <main class="flex-1">
      <TheTodoList />

      <p class="text-center text-sm text-dark-grayish-blue">Drag and drop to reorder list</p>
    </main>
  </div>
</template>
