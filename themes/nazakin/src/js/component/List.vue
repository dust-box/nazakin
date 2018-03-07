<template>
    <div class="container">
        <div class="items" role="listbox">
            <Item v-for="item in tagItems" :key="item.id" :item="item"></Item>
        </div>
    </div>
</template>

<script>
import Item from 'component/Item';

export default {
    name: 'List',
    components: { Item },
    computed: {
        tagItems: function() {
            return this.$store.getters['posts/tags'](this.$route.params.tag);
        }
    },
};
</script>