<template>
<div class="container">
    <div class="items" role="listbox">
        <Item v-for="item in postItems" :key="item.id" :item="item"></Item>
    </div>
</div>
</template>

<script>
import Item from 'component/Item';

export default {
    name: 'Home',
    components: { Item },
    computed: {
        postItems: function() {
            return this.$store.getters['posts/items'];
        }
    },
    beforeCreate: function() {
    },
};
</script>