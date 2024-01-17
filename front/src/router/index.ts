import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "../layouts/User.vue";
import HomePage from "../views/Home.vue";
import LoginPage from '../views/Login.vue'
import AdminLayout from "../layouts/Admin.vue";
import AdminPage from '../views/Admin.vue';
import { MT_NOT_FOUND, RT_ADMIN, RT_NOT_FOUND } from "@/constants/admin";
import { RT_HOME, RT_LOGIN } from "@/constants/user";
const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: AdminPage, name: RT_ADMIN },
    ],
  },
  {
    path: "",
    component: UserLayout,
    children: [
      {path: "", component: HomePage, name: RT_HOME },
      {path: "", component:LoginPage, name: RT_LOGIN}
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: MT_NOT_FOUND,
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: RT_NOT_FOUND
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
