import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Index from '@/views/Index.vue';
import Home from '@/views/Home/home.vue';
import Manage from '@/views/Manage/manage.vue';
import Article from '@/views/Article/article.vue';
import Introduction from '@/views/Introduction/introduction.vue';
import Blog from '@/views/Article/blog.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/manage',
        name: 'Manage',
        component: Manage,
      },
      {
        path: '/introduction',
        name: 'Introduction',
        component: Introduction,
      },
      {
        path: '/article',
        name: 'Article',
        component: Article,
      },
      {
          path: '/article/blog',
          name: 'Blog',
          component: Blog,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
