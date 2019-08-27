<template>
    <div class="post">
         <router-link :to="'/blog/'+post.slug">
      <h2 class="is-size-2">{{post.title}}</h2>
      </router-link>
      <img v-if="post.imageURL" :src="post.imageURL">
    <br/>
      <p class="is-size-6 is-italic">{{post.posted}}</p>
      <p class="is-size-5 has-text-justified">{{post.content}}</p>
      <br/>
      <p>Learn more:</p>
      <ul>
          <li :key="link" v-for="link in post.links">
              <a :href="link">{{link}}</a>
          </li>
      </ul>
      <p>Tagged: 
            <span class="has-text-link has-background-light" :key="tag" v-for="tag in post.tags">
              {{tag}}
          </span>

      </p>
    </div>
</template>
<script>
export default {
    props:{
        post: Object
    }
}
</script>

