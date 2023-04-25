<script>
import TodoListForm from './TodoListForm.vue'
import TodoListItem from './TodoListItem.vue'
import FilterRadioButton from './FilterRadioButton.vue'

export default {
  components: {
    TodoListForm,
    TodoListItem,
    FilterRadioButton
  }
}
</script>

<template>
  <div class="-translate-y-24 px-6 md:-translate-y-36">
    <div class="mx-auto flex max-w-xl flex-col gap-4 md:gap-6">
      <TodoListForm />

      <AppCard class="divide-y divide-very-light-grayish-blue shadow-xl">
        <TodoListItem :id="1">item 1</TodoListItem>
        <TodoListItem :id="2">item 2</TodoListItem>
        <TodoListItem :id="3">item 3</TodoListItem>
        <div
          class="flex h-[3.125rem] items-center justify-between px-5 text-sm text-dark-grayish-blue md:px-6"
        >
          <p>3 items left</p>

          <button>Clear Completed</button>
        </div>
      </AppCard>

      <AppCard class="shadow-lg">
        <div class="flex h-12 items-center justify-center gap-4 text-base">
          <FilterRadioButton id="all" :isChecked="true">All</FilterRadioButton>
          <FilterRadioButton id="active">Active</FilterRadioButton>
          <FilterRadioButton id="hidden">Hidden</FilterRadioButton>
        </div>
      </AppCard>
    </div>
  </div>
</template>
