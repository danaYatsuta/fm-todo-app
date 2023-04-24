<script>
import TodoListItem from './TodoListItem.vue'

export default {
  components: {
    TodoListItem
  }
}
</script>

<template>
  <AppCard>
    <TodoListItem :id="0" :isFormItem="true">
      <input
        type="text"
        placeholder="Create a new todo..."
        class="w-full placeholder:text-dark-grayish-blue"
      />
    </TodoListItem>
  </AppCard>
</template>
