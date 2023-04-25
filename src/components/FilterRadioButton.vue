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
    <label :for="id" class="cursor-pointer peer-checked:text-bright-blue"><slot></slot></label>
  </div>
</template>
