import Home from 'component/Home';
import Post from 'component/Post';

const routes = [
    { path: '/', component: Home },
    { path: '/post/:id', component: Post },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;