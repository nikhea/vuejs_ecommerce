import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: () => import('../components/Products.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    // component: () => import('../components/Form/Login.vue')
    component: () => import('../components/Cart.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductId',
    
    component: () => import( '../components/ProductDetails.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    
    component: () => import( '../components/Layouts/Form/SignIn.vue')
  },

  {
    path: '/login',
    name: 'Login',
    props: true,
    component: () => import( '../components/Layouts/Form/Login.vue')
  
  },
  {
    path: '/logout',
    name: 'logout',
    props: true,
    // component: () => import('../components/Form/Login.vue')
    component: () => import('../components/Products.vue')
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
