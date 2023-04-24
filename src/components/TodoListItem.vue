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
  <div class="group flex h-12 items-center justify-between gap-4 px-5 md:h-16 md:px-6">
    <div class="flex items-center gap-4">
      <label
        :for="`todo-${id}`"
        class="aspect-square w-5 rounded-full from-check-bg-from to-check-bg-to p-px md:w-6 md:p-[2px]"
        :class="{
          'bg-gradient-to-br': isChecked,
          'bg-very-light-grayish-blue': !isChecked,
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
          class="flex aspect-square w-full items-center justify-center rounded-full bg-white"
          :class="{ 'bg-opacity-0': isChecked }"
        >
          <IconCheck class="w-2 md:w-3" :class="{ 'block': isChecked, 'hidden': !isChecked }" />
        </div>
      </label>

      <div class="pt-1" :class="{ 'text-light-grayish-blue line-through': isChecked }">
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
