<template>
    <BlogLayout>
      <div class="post-container">
        <h1>{{ $page.post.title }}</h1>
        <iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" :src="$page.post.soundcloud" />
        <div class="post-content">
            <div v-html="$page.post.content" />
            <Sidebar/>
        </div>
      </div>
    </BlogLayout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    id
    pageTitle
    description
    soundcloud
    content
  }
}
</page-query>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },

  metaInfo() {
    return {
      title: this.$page.post.pageTitle,
      titleTemplate: '%s',
      link: [
        {
          rel: 'canonical',
          href: this.$page.post.path
        }
      ],
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style>
  .post-container {
    margin-bottom: 30px;
  }

  .post-content {
    display: flex;
  }

  .post-content div {
    flex: 2;
  }

  .post-content .sidebar {
    flex: .8;
  }

  .post-content h1 {
    margin-bottom: 10px;
  }

  .post-content a {
    font-weight: bold;
    color: #000;
  }

  .post-content a:hover {
    text-decoration: none;
  }

  .first-line {
    margin-top: 0;
  }

  .first-line::first-letter {
    font-size: 200%;
  }

  .post-content iframe {
    margin-bottom: -15px;
  }

  #download {
    text-align: center;
    text-decoration: underline;
  }

  .dl-icons {
    display: flex;
  }

  .dl-icons a {
    flex: 1;
    text-align: center;
    margin-right: 30px;
  }

  .dl-icons a:last-child {
    margin-right: 0;
  }

  .dl-icons svg {
    width: 100%;
    transition: all .5s;
    transform-origin: 50% 50%;
  }

  .dl-icons svg:hover {
    transform: scale(0.9);
  }

  .traxsource-icon {
    fill: #40a0ff;
    stroke: #40a0ff;
  }

  .beatport-icon {
    fill: #91ca08;
    stroke: #91ca08;
  }
  
  .itunes-icon {
    fill: #a9a9a9;
    stroke: #a9a9a9;
  }
/*---- MEDIA QUERIES ---- */
  @media only screen and (max-width: 767px) {
    .post-content {
      flex-direction: column;
    }

    .post-content .sidebar {
      margin-left: 0;
    }
  }
</style>


