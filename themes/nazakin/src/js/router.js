import Home from 'component/Home';
import Post from 'component/Post';
import List from 'component/List';

const routes = [
    { path: '/', component: Home },
    { path: '/post/:id', component: Post },
    { path: '/tags/:tag', component: List },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});

export default router;