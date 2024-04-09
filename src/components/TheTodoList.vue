<script>
import TodoListForm from './TodoListForm.vue'
import TodoListItem from './TodoListItem.vue'
import TodoListFilter from './TodoListFilter.vue'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'

const fullConfig = resolveConfig(tailwindConfig)

let id = 0

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
    activeTodos() {
      return this.todos.filter((todo) => !todo.completed)
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed)
    },
    filteredTodos() {
      switch (this.todoFilter) {
        default:
        case 'all':
          return this.todos
        case 'active':
          return this.activeTodos
        case 'completed':
          return this.completedTodos
      }
    }
  },
  methods: {
    onResize() {
      this.isMdScreen = window.matchMedia(`(min-width: ${fullConfig.theme.screens.md})`).matches
    },
    createNewTodo(newTodoText, newTodoCompleted = false) {
      const newTodo = {
        id: id++,
        text: newTodoText,
        completed: newTodoCompleted
      }

      this.todos.push(newTodo)
    },
    clearCompleted() {
      this.todos = this.activeTodos
    },
    moveTodo(indexToMove, indexToInsert) {
      const todoToMove = this.todos[indexToMove]

      this.todos.splice(indexToMove, 1)
      this.todos.splice(indexToInsert, 0, todoToMove)
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

    this.createNewTodo('Complete online JavaScript course', true)
    this.createNewTodo('Jog around the park 3x')
    this.createNewTodo('10 minutes meditation')
    this.createNewTodo('Read for 1 hour')
    this.createNewTodo('Pick up groceries')
    this.createNewTodo('Complete Todo App on Frontend Mentor')
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<template>
  <div class="px-6">
    <div class="mx-auto flex max-w-xl flex-col gap-4 md:gap-6">
      <TodoListForm @createNewTodo="createNewTodo" />

      <AppCard
        class="divide-y divide-very-light-grayish-blue shadow-xl dark:divide-dt-very-dark-grayish-blue-2"
      >
        <TransitionGroup name="list">
          <TodoListItem
            v-for="(todo, index) in filteredTodos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @update-todo-completion="(newCompleted) => (todo.completed = newCompleted)"
            @delete-todo="todos = todos.filter((existingTodo) => existingTodo !== todo)"
            @move-todo="moveTodo"
          >
            {{ todo.text }}
          </TodoListItem>
        </TransitionGroup>
        <div
          class="flex h-[3.125rem] items-center justify-between px-5 text-xs text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue md:px-6 md:text-sm"
        >
          <p v-if="activeTodos.length === 0">No tasks</p>
          <p v-else>{{ activeTodos.length }} items left</p>

          <div class="flex items-center gap-14">
            <div ref="filterDesktopParent" class="hidden md:block"></div>

            <button
              @click="clearCompleted"
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

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
