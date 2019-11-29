<template>
  <Layout>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Gridsome',
    titleTemplate: '%s | DJ Statik Music',
    link: [
      { 
        rel: 'canonical', 
        href: 'http://localhost:8080/about/' 
      }
    ],
    meta: [
      {
        name: 'description',
        content: 'This is the about page which Sahil figured out.'
      }
    ]
  }
}
</script>
