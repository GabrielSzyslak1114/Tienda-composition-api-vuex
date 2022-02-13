import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ()=> import(/* webpackChunkName: "about" */  '../views/Productos.vue')
  },
  {
    path: '/producto/:id',
    name: 'ProductDescrip',
    props: true,
    component: ()=> import(/* webpackChunkName: "about" */  '../views/ProductDescrip.vue')
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
