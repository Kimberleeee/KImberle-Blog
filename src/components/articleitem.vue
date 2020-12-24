<template>
  <div class="article-item">
    <div class="article-date-border">
      <div class="article-date">
        <div class="article-date-day">24</div>
        <div class="article-date-yandm">2020/12</div>
      </div>
    </div>
    <div class="article-main">
      <h3>浏览器运行原理</h3>
      <article class="article-content">
        一、浏览器结构（简化） 1. 用户界面 展示除标签页窗口之外的其他用户界面内容 2. 浏览器引擎
        用于在用户界面和渲染引擎之间传递数据 3. 渲染引擎 负责渲染用户请求的页面内容 二、多进程浏览器（chrome为例） 可大致拆分为 1.
        浏览器进程 2. 缓存进程 3. 网络进程 4. 渲染器进程 浏览器会在默认情况为每个标签页创建一个进程
        Process-per-site-instance（默认） 访问不同站点和同一站点的不同页面都会创建新的进程 Process-per-site 同一站点使用同一进程
        Process-per-tab 一个tab里的所有站点使用一个进程 Single process 让浏览器引擎和渲染引擎共用一个进程 5. GPU进程 6. 插件进程
      </article>
      <router-link to="/article/blog" class="article-more">阅读全文</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleItem',
};
</script>
<style>
.article-item {
  width: 100%;
  height: 20rem;
  margin: 0 0 3rem 0;
  display: flex;
}

.article-date-border {
  width: 5rem;
  height: 5rem;
  border: 2px solid #c37021;
  position: relative;
  top: 50%;
  margin-top: -2.5rem;
  flex-shrink: 0;
}

.article-date {
  background-color: #000;
  height: 5rem;
  width: 5rem;
  color: #fff;
  position: absolute;
  left: -1rem;
  top: 1rem;
}

.article-date-day {
  font-size: 2.9rem;
}

.article-date-yandm {
  font-size: 0.9rem;
  color: #c0c4cc;
}

.article-main {
  margin: 2rem 3rem;
  position: relative;
}

.article-main h3 {
  font-size: 1.5rem;
  text-align: start;
  color: #303133;
}

.article-content {
  margin: 1.5rem 0;
  text-align: start;
  height: 10.2rem;
  line-height: 2rem;
  overflow: hidden;
  color: #606266;
}

.article-more {
  position: absolute;
  right: 0.5rem;
  bottom: -0.2rem;
  font-size: 0.85rem;
  color: #c37021;
}
.article-more:hover {
  font-weight: 600;
}
</style>
