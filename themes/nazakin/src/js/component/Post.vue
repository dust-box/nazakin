<template>
<div>
<div class="container">
    <template v-if="post">
        <article class="post">
            <header class="post-header">
                <h1 class="post-title">{{ post.title }}</h1>
                <small>{{ post.description }}</small>

                <div class="post-meta">
                    <time class="post-date" :datetime="post.date_published">
                        {{ dateFormat(post.date_published) }}
                    </time>
                    <span class="post-tag small"><router-link v-for="tag, index in post.tags" :key="index" :to="'/tags/' + tag + '/'">#{{ tag }}</router-link></span>
                </div>
            </header>

            <div class="post-content" v-html="unescape(post.content_html)"></div>
        </article>
    </template>
</div>

<nav class="read-next">
    <router-link class="read-next-story" v-if="next.path" :to="localeURL(next.path)" :style="'background-image: url(' + next.image + ');'">
        <h3 class="read-next-title">{{ next.title }}</h3>
    </router-link>
    <router-link class="read-next-story prev" v-if="prev.path" :to="localeURL(prev.path)" :style="'background-image: url(' + prev.image + ');'">
        <h3 class="read-next-title">{{ prev.title }}</h3>
    </router-link>
</nav>
</div>
</template>

<script>
import url from 'url';

export default {
    name: 'Post',
    computed: {
        post: function() {
            if (this.$store.getters['posts/item'].items) {
                return this.$store.getters['posts/item'].items[0];
            } else {
                return {};
            }
            
        },
        next: function() {
            const item = this.$store.getters['posts/item'];
            const path = item.next_url ? item.next_url : null;
            const image = item.next_image ? item.next_image : null;
            const title = item.next_title ? item.next_title : null;

            return { path, image, title };
        },
        prev: function() {
            const item = this.$store.getters['posts/item'];
            const path = item.previous_url ? item.previous_url : null;
            const image = item.previous_image ? item.previous_image : null;
            const title = item.previous_title ? item.previous_title : null;

            return { path, image, title };
        }
    },
    beforeMount: function() {
        console.log('test');
        this.$store.dispatch('posts/fetchPost', this.$route.params.id);
    },
    beforeRouteUpdate: function(to, from, next) {
        console.log('route update');
        console.log(to.params.id);
        this.$store.dispatch('posts/fetchPost', to.params.id);
        next();
    },
    methods: {
        dateFormat(str) {
            const date = new Date(str);
            return date.toDateString();
        },
        unescape(str) {
            if (typeof str !== 'string') return;
            return str
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&#34;/g, '"');
        },
        localeURL(urlstr) {
            const parseURL = url.parse(urlstr);
            return parseURL.pathname;
        }
    }
};
</script>