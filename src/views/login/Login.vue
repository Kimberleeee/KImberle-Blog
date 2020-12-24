<template>
  <div class="login">
    <h1>This is Login</h1>
    <el-button type="primary" size="default" @click="nextToHome">前往主页</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    nextToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
