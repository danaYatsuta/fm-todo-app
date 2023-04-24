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
      <label :for="`todo-${id}`" class="flex items-center justify-center">
        <input
          type="checkbox"
          :name="`todo-${id}`"
          v-model="isChecked"
          :disabled="isFormItem"
          class="aspect-square w-5 appearance-none rounded-full border border-very-light-grayish-blue from-check-bg-from to-check-bg-to checked:bg-gradient-to-br md:w-6"
          :class="{ 'cursor-pointer': !isFormItem }"
        />
        <IconCheck
          class="pointer-events-none absolute w-2 md:w-3"
          :class="{ 'block': isChecked, 'hidden': !isChecked }"
        />
      </label>

      <div
        class="pt-1 peer-checked:text-very-light-gray"
        :class="{ 'text-light-grayish-blue line-through': isChecked }"
      >
        <slot></slot>
      </div>
    </div>

    <button
      v-if="!isFormItem"
      aria-label="Delete item"
      class="w-3 md:w-4 xl:hidden xl:group-hover:block"
    >
      <IconCross />
    </button>
  </div>
</template>
