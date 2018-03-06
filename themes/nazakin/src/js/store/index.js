Vue.use(Vuex);

import posts from 'store/posts';

export default new Vuex.Store({
    modules: {
      posts,
    }
});