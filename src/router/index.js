import { createRouter, createWebHistory } from 'vue-router'
import Web from '../views/Web'
import Age from "@/views/Age";
import ForgotPassword from "@/views/ForgotPassword";
import Guard from "../../services/middleware";


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
