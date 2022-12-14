const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/movies', component: Movies },
    ]
})