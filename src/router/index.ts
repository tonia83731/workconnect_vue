import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import UserView from '@/views/UserView.vue'
import TodoView from '@/views/TodoView.vue'
import VoteView from '@/views/VoteView.vue'
import MemberView from '@/views/MemberView.vue'
import SettingView from '@/views/SettingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView,
        },
      ],
    },
    {
      path: '/dashboard/:userId',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: '/user-info',
          name: 'user',
          component: UserView,
        },
      ],
    },
    {
      path: '/workspace/:account',
      name: 'workspace',
      children: [
        {
          path: 'todo',
          name: 'todo',
          component: TodoView,
        },
        {
          path: 'vote',
          name: 'vote',
          component: VoteView,
        },
        {
          path: 'member',
          name: 'member',
          component: MemberView,
        },
        {
          path: 'setting',
          name: 'setting',
          component: SettingView,
        },
      ],
    },
  ],
})

export default router
