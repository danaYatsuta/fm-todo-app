<script>
import FilterRadioButton from './FilterRadioButton.vue'

export default {
  components: {
    FilterRadioButton
  },
  data() {
    return {
      selectedFilter: null
    }
  }
}
</script>

<template>
  <div>
    <div
      class="flex h-12 items-center justify-center gap-4 text-base font-bold text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue"
    >
      <FilterRadioButton id="all" :isChecked="true">All</FilterRadioButton>
      <FilterRadioButton id="active">Active</FilterRadioButton>
      <FilterRadioButton id="hidden">Hidden</FilterRadioButton>
    </div>
  </div>
</template>
