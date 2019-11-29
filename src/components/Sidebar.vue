<template>
   <div class="sidebar">
       <h3>Latest Releases</h3>
       <div class="sidebar-content">
            <ul>
                <li v-for="edge in $static.posts.edges" :key="edge.node.id">
                    <g-link :to="edge.node.path"><g-image v-if="$page.post.id != edge.node.id" :src="edge.node.image" /></g-link>
                    <g-link class="side-track" v-if="$page.post.id != edge.node.id" :to="edge.node.path">{{ edge.node.title }}</g-link>
                </li>
            </ul>
        </div>
   </div>
</template>

<static-query>
query {
  posts: allPost (sortBy: "date" order: DESC limit: 5) {
    edges {
      node {
        id
        title
        image
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  
}
</script>


<style>
    .sidebar {
        border: 1px solid #000;
        margin-left: 30px;
        box-shadow: 5px 10px #000!important;
    }

    .sidebar h3 {
        text-transform: uppercase;
        text-decoration: underline;
        margin-bottom: 0;
        padding: 0 1.5em 0 1.5em;
        text-align: center;
    }

    .sidebar-content {
         padding: 0 1.5em 0 1.5em;
    }

    .sidebar-content ul {
        padding: 0;
    }

    .sidebar-content ul li {
        display: flex;
        list-style-type: none;
        text-align: left;
        font-size: 0.8em;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .sidebar-content ul li img {
      width: 100px;
      margin-right: 20px;
      transition: all .5s;
      transform-origin: 50% 50%;
    }

    .sidebar-content ul li img:hover {
      opacity: .8;
      transform: scale(0.9);
    }

    .side-track {
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: 600px) {
      .sidebar-content ul li {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
      }

      .sidebar-content ul li img {
        margin-right: 0;
      }

      .sidebar-content ul li a {
        text-align: center;
      }

      .sidebar-content ul li img {
        width: 100%;
      }
    }

</style>