<script>
import FilterRadioButton from './FilterRadioButton.vue'

export default {
  components: {
    FilterRadioButton
  },
  props: {
    defaultTodoFilter: String
  },
  data() {
    return {
      todoFilter: this.defaultTodoFilter
    }
  },
  watch: {
    todoFilter(newtodoFilter) {
      this.$emit('updateTodoFilter', newtodoFilter)
    }
  }
}
</script>

<template>
  <div>
    <div class="flex h-12 items-center justify-center gap-4">
      <FilterRadioButton v-model="todoFilter" value="all">All</FilterRadioButton>
      <FilterRadioButton v-model="todoFilter" value="active">Active</FilterRadioButton>
      <FilterRadioButton v-model="todoFilter" value="hidden">Hidden</FilterRadioButton>
    </div>
  </div>
</template>
