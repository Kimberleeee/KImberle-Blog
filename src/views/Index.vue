<template>
  <div class="index">
    <nav class="index-nav">
      <ul>
        <li><router-link to="/" :class="[thisIsAct == 'Home' ? 'selectthis' : '']">Home</router-link></li>
        <li><router-link to="/article" :class="[thisIsAct == 'Article' ? 'selectthis' : '']">Article</router-link></li>
        <li>
          <router-link to="/introduction" :class="[thisIsAct == 'Introduction' ? 'selectthis' : '']">Introduction</router-link>
        </li>
        <li><router-link to="/manage" :class="[thisIsAct == 'Manage' ? 'selectthis' : '']">Mine</router-link></li>
      </ul>
    </nav>
    <section class="index-section">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';

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

// function navSelectThis() {
//   const thisIsAct = ref('');
//   onBeforeRouteUpdate((to) => {
//     const toName = to.name;
//     switch (toName) {
//       case 'Home':
//         thisIsAct.value = 'Home';
//         break;
//       case 'Article':
//         thisIsAct.value = 'Article';
//         break;
//       case 'Introduction':
//         thisIsAct.value = 'Introduction';
//         break;
//       case 'Manage':
//         thisIsAct.value = 'Manage';
//         break;
//       default:
//         thisIsAct.value = '';
//         break;
//     }
//   });
//   return { thisIsAct };
// }
export default {
  name: 'Index',
  // setup函数是组合API的入口函数
  setup() {
    const { nextToManage } = routerNext();
    const { count, selfAdd } = numAdd();
    // const { thisIsAct } = navSelectThis();
    return {
      count,
      nextToManage,
      selfAdd,
      // navSelectThis,
      // thisIsAct,
    };
  },
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.index {
  height: 100%;
  display: flex;
}

.index-nav {
  height: 100%;
  width: 18rem;
  border-right: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.index-nav ul {
  width: 100%;
}

.index-nav li {
  height: 8rem;
  font-family: 'Twisted';
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.index-section {
  padding: 5rem 8rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-image: url(../assets/images/appbg2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.index-nav .router-link-exact-active {
  font-weight: 600;
}
</style>
