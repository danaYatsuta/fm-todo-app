<script>
import TodoListForm from './TodoListForm.vue'
import TodoListItem from './TodoListItem.vue'

export default {
  components: {
    TodoListForm,
    TodoListItem
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
      </AppCard>
    </div>
  </div>
</template>
