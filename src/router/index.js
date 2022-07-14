import { createRouter, createWebHistory } from 'vue-router'
import Web from '../views/Web'
import Age from "@/views/Age";
import ForgotPassword from "@/views/ForgotPassword";
import Guard from "../../services/middleware";
import Management from "@/views/management/Management";
import Users from "@/views/management/Users";
import User from "@/views/management/User";
import Dashboard from "@/views/management/Dashboard";


const routes = [
  {
    path: '/',
    name: 'Web',
    component: Web,
    beforeEnter: Guard.login
  },
  {
    path: '/age',
    name: 'Age',
    component: Age,
    beforeEnter: Guard.auth
  },
  {
    path: '/gerenciamento',
    name: 'Management',
    component: Management,
    beforeEnter: Guard.authAdmin
  },
  {
    path: '/gerenciamento/usuarios',
    name: 'Users',
    component: Users,
    beforeEnter: Guard.authAdmin
  },
  {
    path: '/gerenciamento/dashboards',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: Guard.authAdmin
  },
  {
    path: '/recuperar-senha',
    name: 'ForgotPassword',
    component: ForgotPassword
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
