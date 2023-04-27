<script>
import FilterRadioButton from './FilterRadioButton.vue'

export default {
  components: {
    FilterRadioButton
  },
  data() {
    return {
      selectedFilter: 'all'
    }
  }
}
</script>

<template>
  <div>
    <div class="flex h-12 items-center justify-center gap-4">
      <FilterRadioButton v-model="selectedFilter" value="all">All</FilterRadioButton>
      <FilterRadioButton v-model="selectedFilter" value="active">Active</FilterRadioButton>
      <FilterRadioButton v-model="selectedFilter" value="hidden">Hidden</FilterRadioButton>
    </div>
  </div>
</template>
