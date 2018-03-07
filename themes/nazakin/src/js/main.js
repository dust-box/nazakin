require('../css/style.scss');
require('component/webfont');

import Meta from 'vue-meta';

import router from 'router';
import store from 'store';

Vue.use(VueRouter);
Vue.use(Meta);

const app = new Vue({
    store,
    el: '#app',
    router
});

store.dispatch('posts/fetchPosts');