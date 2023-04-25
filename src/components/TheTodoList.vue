<script>
import TodoListForm from './TodoListForm.vue'
import TodoListItem from './TodoListItem.vue'
import TodoListFilter from './TodoListFilter.vue'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'

const fullConfig = resolveConfig(tailwindConfig)

export default {
  components: {
    TodoListForm,
    TodoListItem,
    TodoListFilter
  },
  data() {
    return {
      isMdScreen: false
    }
  },
  methods: {
    onResize() {
      this.isMdScreen = window.matchMedia(`(min-width: ${fullConfig.theme.screens.md})`).matches
    }
  },
  watch: {
    isMdScreen(newIsMdScreen) {
      if (newIsMdScreen) {
        this.$refs.filterDesktopParent.appendChild(this.$refs.filter)
      } else {
        this.$refs.filterMobileParent.appendChild(this.$refs.filter)
      }
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<template>
  <div class="-translate-y-24 px-6 md:-translate-y-36">
    <div class="mx-auto flex max-w-xl flex-col gap-4 md:gap-6">
      <TodoListForm />

      <AppCard
        class="divide-y divide-very-light-grayish-blue shadow-xl dark:divide-dt-very-dark-grayish-blue-2"
      >
        <TodoListItem :id="1">item 1</TodoListItem>
        <TodoListItem :id="2">item 2</TodoListItem>
        <TodoListItem :id="3">item 3</TodoListItem>
        <div
          class="flex h-[3.125rem] items-center justify-between px-5 text-sm text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue md:px-6 md:text-base"
        >
          <p>3 items left</p>

          <div class="flex items-center gap-14">
            <div ref="filterDesktopParent" class="hidden md:block"></div>

            <button
              class="hover:text-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </AppCard>

      <AppCard class="shadow-lg md:hidden">
        <div ref="filterMobileParent">
          <div ref="filter">
            <TodoListFilter />
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
