<template>
  <div>
    Parent
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Parent",
  components: {
    Child,
  },
};
</script>

<style></style>
