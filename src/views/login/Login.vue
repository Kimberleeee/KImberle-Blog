<template>
  <div class="login">
    <div class="login-main">
      <div class="login-title">登陆</div>
      <el-form :model="form" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="default" @click="ToHome">回到主页</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    ToHome () {
      this.$router.replace({ name: 'Home' });
    }
  }
};

</script>
<style>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-main {
  box-sizing: border-box;
  padding: 1.25rem;
  width: 31.25rem;
}

.login-title {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.el-form-item:last-of-type .el-form-item__content {
  margin-left: 0 !important;
}
</style>
