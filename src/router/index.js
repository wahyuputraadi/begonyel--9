import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListProduct from '../views/ListProduct.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Keranjang from '../views/Keranjang.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/list-product',
        name: 'ListProduct',
        component: ListProduct
    },
    {
        path: '/detail-product',
        name: 'DetailProduct',
        component: DetailProduct
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router