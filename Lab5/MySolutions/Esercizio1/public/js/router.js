const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/movies', component: Movies },
        { path: '/404', component: NotFound },
        { path: '/:catchAll(.*)', redirect: '/404' }
    ]
})