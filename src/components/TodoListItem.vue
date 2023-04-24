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
  }
}
</script>

<template>
  <div class="flex h-12 items-center justify-between gap-4 px-5">
    <div class="flex items-center gap-4">
      <label :for="`todo-${id}`" class="flex items-center justify-center">
        <input
          type="checkbox"
          :name="`todo-${id}`"
          :disabled="isFormItem"
          class="peer aspect-square w-5 appearance-none rounded-full border border-very-light-grayish-blue from-check-bg-from to-check-bg-to checked:bg-gradient-to-br"
          :class="{ 'cursor-pointer': !isFormItem }"
        />
        <IconCheck class="pointer-events-none absolute hidden w-2 peer-checked:block" />
      </label>

      <div class="pt-1">
        <slot></slot>
      </div>
    </div>

    <button aria-label="Delete item" class="w-3"><IconCross /></button>
  </div>
</template>
