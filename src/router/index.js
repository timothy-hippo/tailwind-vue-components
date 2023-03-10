import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'progress-bar',
        name: 'progress-bar',
        component: () => import('@/views/ProgressBar.vue')
      },
      {
        path: 'rabbit-button',
        name: 'rabbit-button',
        component: () => import('@/views/RabbitButton.vue')
      },
      {
        path: 'accordion-menu-item',
        name: 'accordion-menu-item',
        component: () => import('@/views/AccordionMenuItem.vue')
      },
      {
        path: 'simple-calendar',
        name: 'simple-calendar',
        component: () => import('@/views/SimpleCalendar.vue')
      },
      {
        path: 'modal-view',
        name: 'modal-view',
        component: () => import('@/views/ModalView.vue')
      },
      {
        path: 'dark-mode-switcher',
        name: 'dark-mode-switcher',
        component: () => import('@/views/DarkModeSwitcher.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
