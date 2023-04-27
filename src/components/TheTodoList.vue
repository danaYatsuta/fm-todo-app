<script>
import TodoListForm from './TodoListForm.vue'
import TodoListItem from './TodoListItem.vue'
import TodoListFilter from './TodoListFilter.vue'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'

const fullConfig = resolveConfig(tailwindConfig)

let id = 1

export default {
  components: {
    TodoListForm,
    TodoListItem,
    TodoListFilter
  },
  data() {
    return {
      todos: [],
      todoFilter: 'all',
      isMdScreen: false
    }
  },
  computed: {
    filteredTodos() {
      switch (this.todoFilter) {
        default:
        case 'all':
          return this.todos
        case 'active':
          return this.todos.filter((todo) => !todo.completed)
        case 'completed':
          return this.todos.filter((todo) => todo.completed)
      }
    }
  },
  methods: {
    onResize() {
      this.isMdScreen = window.matchMedia(`(min-width: ${fullConfig.theme.screens.md})`).matches
    },
    createNewTodo(newTodoText) {
      const newTodo = {
        id: id++,
        text: newTodoText,
        completed: false
      }

      this.todos.push(newTodo)
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
      <TodoListForm @createNewTodo="createNewTodo" />

      <AppCard
        class="divide-y divide-very-light-grayish-blue shadow-xl dark:divide-dt-very-dark-grayish-blue-2"
      >
        <TodoListItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @update-todo-completion="(newCompleted) => (todo.completed = newCompleted)"
          @delete-todo="todos = todos.filter((existingTodo) => existingTodo !== todo)"
        >
          {{ todo.text }}
        </TodoListItem>

        <div
          class="flex h-[3.125rem] items-center justify-between px-5 text-sm text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue md:px-6 md:text-base"
        >
          <p>3 items left</p>

          <div class="flex items-center gap-14">
            <div ref="filterDesktopParent" class="hidden md:block"></div>

            <button
              class="hover:text-very-dark-grayish-blue active:text-bright-blue dark:hover:text-dt-light-grayish-blue-hover dark:active:text-bright-blue"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </AppCard>

      <AppCard class="shadow-lg md:hidden">
        <div ref="filterMobileParent">
          <div ref="filter">
            <TodoListFilter
              :default-todo-filter="todoFilter"
              @update-todo-filter="(newTodoFilter) => (todoFilter = newTodoFilter)"
            />
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
