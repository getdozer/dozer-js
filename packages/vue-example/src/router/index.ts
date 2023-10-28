import { createRouter, createWebHistory } from 'vue-router'
import Common from '../views/Common.vue'
import CountEvent from '../views/CountEvent.vue'
import QueryEvent from '../views/QueryEvent.vue'
import Endpoints from '../views/Endpoints.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
    },
    {
      path: '/count-event',
      name: 'CountEvent',
      component: CountEvent,
    },
    {
      path: '/query-event',
      name: 'QueryEvent',
      component: QueryEvent,
    },
    {
      path: '/endpoints',
      name: 'Endpoints',
      component: Endpoints,
    },
  ],
})

export default router
