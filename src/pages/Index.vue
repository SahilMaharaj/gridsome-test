<template>
  <Layout>
        
    <h1>Hello, world!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.</p>

    <h2>Manual</h2>

    <ul>
      <li><g-link to="/music/count-on-me/">Count On Me</g-link></li>
      <li><g-link to="/music/count-on-me/">Count On Me</g-link></li>
      <li><g-link to="/music/count-on-me/">Count On Me</g-link></li>
    </ul>

    <h2>Dynamic</h2>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "title" order: ASC) {
    edges {
      node {
        id
        title
        path
    	}
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'DJ Statik South Africa',
    titleTemplate: '%s | House Music Producer & DJ',
    link: [
      {
        rel: 'canonical',
        href: '/'
      }
    ],
    meta: [
      {
        name: 'description',
        content: 'Welcome to our first website with Gridsome, a static site generator for Vue JS websites.'
      }
    ]
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
