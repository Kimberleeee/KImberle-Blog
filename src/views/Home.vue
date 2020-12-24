<template>
  <div class="home">
    <h1>This is Home</h1>
    <el-button type="primary" size="default" @click="nextToManage">前往后台</el-button>
    <el-button type="primary" size="default" @click="selfAdd">自加</el-button>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

function routerNext() {
  const router = useRouter();
  // 在组合API中，如果想定义方法，不用定义到methods中，直接定义即可
  function nextToManage() {
    router.push({ name: 'Manage' });
  }
  return { nextToManage };
}

function numAdd() {
  // 定义了一个名称叫count的变量，这个变量的初始值是0
  // 变量改变后，vue会自动更新UI
  const count = ref(0);
  // ref函数注意点
  // ref函数只能监听简单类型变化，不能见挺复杂类型的变化（对象/数组）
  function selfAdd() {
    count.value += 1;
  }
  // 在组合API中要想在外界使用，必须通过return{ xxx, xxx}暴露出去
  return { count, selfAdd };
}
export default {
  name: 'Home',
  // setup函数是组合API的入口函数
  setup() {
    const { nextToManage } = routerNext();
    const { count, selfAdd } = numAdd();
    return { count, nextToManage, selfAdd };
  },
};
</script>
