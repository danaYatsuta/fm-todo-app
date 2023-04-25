<script>
import IconCheck from './icons/IconCheck.vue'
import IconCross from './icons/IconCross.vue'

export default {
  components: {
    IconCheck,
    IconCross
  },
  props: {
    id: Number,
    isFormItem: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: false
    }
  }
}
</script>

<template>
  <div
    class="group flex items-center justify-between gap-4 px-5 md:px-6"
    :class="{ 'h-12 md:h-16': isFormItem, 'h-[3.25rem] md:h-16': !isFormItem }"
  >
    <div class="flex w-full items-center gap-4 overflow-hidden">
      <label
        :for="`todo-${id}`"
        class="aspect-square w-5 rounded-full from-check-bg-from to-check-bg-to p-px md:w-6"
        :class="{
          'bg-gradient-to-br': isChecked,
          'bg-very-light-grayish-blue dark:bg-dt-very-dark-grayish-blue-2': !isChecked,
          'cursor-pointer hover:bg-gradient-to-br': !isFormItem
        }"
      >
        <input
          type="checkbox"
          :id="`todo-${id}`"
          v-model="isChecked"
          :disabled="isFormItem"
          class="hidden"
        />

        <div
          class="flex aspect-square w-full items-center justify-center rounded-full bg-white dark:bg-dt-very-dark-desaturated-blue"
          :class="{ 'bg-opacity-0 dark:bg-opacity-0': isChecked }"
        >
          <IconCheck class="w-2 md:w-3" :class="{ 'block': isChecked, 'hidden': !isChecked }" />
        </div>
      </label>

      <div
        class="flex-1 truncate pt-1"
        :class="{
          'text-light-grayish-blue line-through dark:text-dt-very-dark-grayish-blue-2': isChecked
        }"
      >
        <slot></slot>
      </div>
    </div>

    <button
      v-if="!isFormItem"
      aria-label="Delete task"
      class="w-3 md:w-4 xl:hidden xl:group-hover:block"
    >
      <IconCross />
    </button>
  </div>
</template>
