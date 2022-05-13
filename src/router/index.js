import Vue from 'vue'
import VueRouter from 'vue-router'
import TreeIcon from '../views/TreeIcon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TreeIcon
  },
  {
    path: '/selectTree',
    name: 'selectTree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectTree.vue')
  },
  {
    path: '/singleSelect',
    name: 'singleSelect',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleSelectTree.vue')
  },
  {
    path: '/selectTreePlus',
    name: 'selectTreePlus',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectTreePlus.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
