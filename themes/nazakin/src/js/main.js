require('../css/style.scss');
require('component/webfont');

import ItemImage from './component/item-image.vue';

Vue.component('item-image', ItemImage);

new Vue({
    el: '.items',
});