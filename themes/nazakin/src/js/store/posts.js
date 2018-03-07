import request from 'axios';


export default {
    namespaced: true,
    state: {
        items: [],
        item: {},
        tags: [],
    },
    getters: {
        items: state => state.items,
        item: state => state.item,
        tags: (state) => (tagname) => {
            return state.items.filter(item => item.tags.indexOf(tagname) >= 0);
        },
    },
    mutations: {
        getItems (state, res) {
            state.items = res.data.items;
        },
        getItem (state, res) {
            state.item = res.data;
        },
    },
    actions: {
        async fetchPosts ({ commit }) {
            const items = [];
            commit('getItems', await request.get('/index.json'));
        },
        async fetchPost ({ commit }, id) {
            const item = {};
            if (!id) return item;
            return commit('getItem', await request.get(`/post/${id}/index.json`));
        },
    }
};