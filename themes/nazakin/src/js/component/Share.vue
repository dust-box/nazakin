<template>
<aside class="share">
  <h4 class="share-title">Share this post</h4>
  <a :href="'https://twitter.com/share?text=' + convertURL(title) + '&amp;url=' + convertURL(url)"
      onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
      <span class="hidden">Twitter</span>
  </a>
  <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + convertURL(url)"
      onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;">
      <span class="hidden">Facebook</span>
  </a>
  <a :href="'http://pinterest.com/pin/create/button/?url=' + convertURL(url) + 'amp;description=' + convertURL(title)"
      onclick="window.open(this.href, 'pinterest-share','width=580,height=296');return false;">
      <span class="hidden">Pinterest</span>
  </a>
  <a :href="'https://plus.google.com/share?url=' + convertURL(url)"
     onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;">
      <span class="hidden">Google+</span>
  </a>
</aside>
</template>

<script>
export default {
    props: ['url', 'title'],
    methods: {
        convertURL: (str) => {
            return encodeURIComponent(str);
        }
    }
}
</script>