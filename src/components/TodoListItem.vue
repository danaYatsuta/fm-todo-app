<script>
import IconCheck from './icons/IconCheck.vue'
import IconCross from './icons/IconCross.vue'

import { store } from '/src/store.js'

export default {
  components: {
    IconCheck,
    IconCross
  },
  props: {
    todo: Object,
    index: Number,
    isFormItem: {
      type: Boolean,
      default: false
    }
  },
  emits: ['updateTodoCompletion', 'deleteTodo', 'moveTodo'],
  data() {
    return {
      isCompleted: this.isFormItem ? false : this.todo.completed,
      isBeingDragged: false,
      isBeingDraggedOver: false,
      store
    }
  },
  computed: {
    id() {
      return this.isFormItem ? 'form' : this.todo.id
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo')
    },
    onDragStart(e) {
      this.store.isDragging = true
      this.isBeingDragged = true
      e.dataTransfer.setData('text/plain', this.index)
    },
    onDragOver(e) {
      this.isBeingDraggedOver = true

      if (!this.isFormItem) {
        e.dataTransfer.dropEffect = 'move'
      } else {
        e.dataTransfer.dropEffect = 'none'
      }
    },
    onDragLeave() {
      this.isBeingDraggedOver = false
    },
    onDragEnd() {
      this.store.isDragging = false
      this.isBeingDragged = false
    },
    onDrop(e) {
      this.isBeingDraggedOver = false
      this.$emit('moveTodo', e.dataTransfer.getData('text/plain'), this.index)
    }
  },
  watch: {
    isCompleted(newIsChecked) {
      this.$emit('updateTodoCompletion', newIsChecked)
    }
  }
}
</script>

<template>
  <div
    class="group flex items-center justify-between gap-4 px-5 md:px-6"
    :class="{
      'h-12 md:h-16': isFormItem,
      'h-[3.25rem] cursor-grab md:h-16': !isFormItem,
      'opacity-50': isBeingDragged,
      'opacity-30': !isFormItem && isBeingDraggedOver
    }"
    :draggable="!isFormItem"
    @dragstart="onDragStart"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @dragend="onDragEnd"
    @drop.prevent="onDrop"
  >
    <div
      class="flex w-full items-center gap-4 overflow-hidden"
      :class="{ 'pointer-events-none': store.isDragging }"
    >
      <label
        :for="`todo-${id}`"
        class="aspect-square w-5 rounded-full from-check-bg-from to-check-bg-to p-px md:w-6"
        :class="{
          'bg-gradient-to-br': isCompleted,
          'bg-very-light-grayish-blue dark:bg-dt-very-dark-grayish-blue-2': !isCompleted,
          'cursor-pointer hover:bg-gradient-to-br': !isFormItem
        }"
      >
        <input
          type="checkbox"
          :id="`todo-${id}`"
          v-model="isCompleted"
          :disabled="isFormItem"
          class="hidden"
        />

        <span
          class="flex aspect-square w-full items-center justify-center rounded-full bg-white dark:bg-dt-very-dark-desaturated-blue"
          :class="{ 'bg-opacity-0 dark:bg-opacity-0': isCompleted }"
        >
          <IconCheck class="w-2 md:w-3" :class="{ 'block': isCompleted, 'hidden': !isCompleted }" />
        </span>
      </label>

      <div
        class="flex-1 truncate pt-1"
        :class="{
          'text-light-grayish-blue line-through dark:text-dt-very-dark-grayish-blue-2': isCompleted
        }"
      >
        <slot></slot>
      </div>
    </div>

    <button
      v-if="!isFormItem"
      @click="deleteTodo"
      aria-label="Delete task"
      class="w-3 md:w-4 xl:hidden xl:group-hover:block"
      :class="{ 'pointer-events-none': store.isDragging }"
    >
      <IconCross />
    </button>
  </div>
</template>
