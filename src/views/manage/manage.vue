<template>
  <div class="manage">
    <h1>This is manage</h1>
    <el-button type="primary" size="default" @click="exitUser">退出登录</el-button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Manage',
  methods: {
    exitUser() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
