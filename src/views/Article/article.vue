<template>
  <div class="article">
    <Item></Item>
    <el-divider></el-divider>
    <Item></Item>
  </div>
</template>
<script>
import Item from '@/components/articleitem.vue';

export default {
  name: 'Article',
  components: {
    Item,
  },
};
</script>
<style>
.article {
  height: 100%;
  border-right: 1px solid #dcdfe6;
  box-shadow: 2px 0 4px #a5a8af;
  background-color: #fff;
}
.article .el-divider {
  width: 90%;
  position: relative;
  right: -10%;
}
</style>
