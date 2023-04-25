<script>
export default {
  props: {
    id: String,
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div>
    <input type="radio" name="todo-filter" :id="id" class="peer hidden" :checked="isChecked" />
    <label
      :for="id"
      class="cursor-pointer text-base font-bold text-dark-grayish-blue hover:text-very-dark-grayish-blue peer-checked:text-bright-blue dark:text-dt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover"
      ><slot></slot
    ></label>
  </div>
</template>
