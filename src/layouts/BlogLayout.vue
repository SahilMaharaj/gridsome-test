<template>
<div class="full-width-layout">
  <div class="layout">
    <MainNavigation />
    <slot/>
  </div>
    <Footer />
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainNavigation from '~/components/MainNavigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    MainNavigation,
    Footer
  },

  metaInfo: {
    htmlAttrs: {
        lang: 'en-ZA',
    }
  }
}
</script>

<style>
.layout {
  max-width: 1180px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
