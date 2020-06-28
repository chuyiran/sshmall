import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('views/home/Home')
    },
    {
        path: '/cart',
        component: () =>
            import ('views/cart/Cart')
    },
    {
        path: '/category',
        component: () =>
            import ('views/category/Category')
    },
    {
        path: '/profile',
        component: () =>
            import ('views/profile/Profile')
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})