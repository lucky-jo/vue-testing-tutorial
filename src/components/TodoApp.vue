<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-ckeckbox"
      />
    </div>
    <form @submit.prevent="createTodo" data-test="form">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue Testing",
          completed: false,
        },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>

<style scoped>
.completed {
  text-transform: line-through;
  color: green;
}
</style>
