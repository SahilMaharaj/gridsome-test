<template>
  <Layout>
        
    


    <h2>Dynamic</h2>
    <div class="track-grid">
      <div class="track-wrapper" v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path"><g-image class="track-cover" :src="post.node.image" /></g-link>
          <div class="track-info">
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
            <div class="track-excerpt">{{ post.node.excerpt | truncate(105) }}</div>
          </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "date" order: DESC limit: 6) {
    edges {
      node {
        id
        title
        image
        path
        excerpt
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
.track-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.track-cover {
  width: 100%;
  transition: all .5s;
  transform-origin: 50% 50%;
}

.track-cover:hover {
  opacity: .8;
  transform: scale(0.9);
}

.track-wrapper:last-child {
  margin-right: 0;
}

.track-wrapper a {
  display: block;
  text-align: center;
  font-size: 0.9em;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
}

.track-info {
  padding: 10px 10px;
}

.track-excerpt {
  margin-top: 10px;
  font-size: .9em;
  text-align: center;
}





/*-----MEDIA QUERIES----*/
@media only screen and (max-width: 750px) {
  .track-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  }

  .track-excerpt {
    text-align: center;
  }
  
}
</style>
