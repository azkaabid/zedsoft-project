import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MultiStepForm from '../components/MultiStepForm.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/multistepform',
    name: 'MultiStepForm',
    component: MultiStepForm
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
