<template>
<div class="item">
    <router-link :to="localeURL(item.url)">
        <div class="item-thumbnail">
            <ItemImage v-if="isImage(item.image)" :src="item.image" :alt="item.title"></ItemImage>
            <ItemImage v-else src="/images/_default.jpg" :alt="item.title"></ItemImage>
        </div>
        <h2 class="item-title">{{ item.title }}</h2>
        <div class="item-excerpt">{{ item.summary }}</div>
        <footer class="item-meta">
            <time class="item-date" :datetime="item.date_published">
                {{ dateFormat(item.date_published) }}
            </time>
        </footer>
    </router-link>
</div>
</template>

<script>
import ItemImage from 'component/ItemImage';
import url from 'url';

export default {
    props: ['item'],
    components: { ItemImage },
    methods: {
        isImage: function(imagePath) {
            return /\.(jpg|png|gif|svg)$/.test(imagePath);
        },
        dateFormat(str) {
            const date = new Date(str);
            return date.toDateString();
        },
        localeURL(urlstr) {
            const parseURL = url.parse(urlstr);
            return parseURL.pathname;
        }
    },
};
</script>