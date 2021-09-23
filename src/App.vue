<template>
  <div>
    <TodoApp />
    <Nav />
    <Parent />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";
import Nav from "./components/Nav.vue";
import Parent from "./components/Parent.vue";
export default {
  name: "App",
  components: {
    TodoApp,
    Nav,
    Parent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
