require('../css/style.scss');
require('component/webfont');

import router from 'router';
import store from 'store';

Vue.use(VueRouter);

const app = new Vue({
    store,
    el: '#app',
    router
});

store.dispatch('posts/fetchPosts');