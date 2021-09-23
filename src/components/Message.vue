<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>1</h3>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
