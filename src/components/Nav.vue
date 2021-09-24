<template>
  <nav>
    <a>Home</a>
    <a v-if="isLoggedIn" ref="profile">My Profile</a>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style scoped></style>
