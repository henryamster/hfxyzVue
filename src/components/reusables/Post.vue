<template>
    <div class="post">
         <router-link :to="'/blog/'+post.slug">
      <p class=" pinyon">{{post.title}}</p>
      </router-link>
      <img v-if="post.imageURL" :src="post.imageURL" class="is-fullwidth is-marginless is-paddingless">
    <br/>
      <p class="has-text-link is-italic date">{{Date(post.posted).toLocaleString('en-US')}}</p>
      <p class="is-size-5 content">{{post.content}}</p>
      <br/>
      <p class="is-bold">Learn more:</p>
      <ul>
          <li :key="link" v-for="link in post.links" class="tag">
              <a :href="link">{{link}}</a>
          </li>
      </ul>
      <p>Tagged: 
            <span class="has-text-link tag has-background-light" :key="tag" v-for="tag in post.tags">
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
<style >
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Text|Lexend+Mega|Pinyon+Script&display=swap");
.post{
    padding:8px;   
    border-radius:8px;

}
.content{
    padding-top:25px;
    letter-spacing: -1px;
    word-spacing: 2px;
}
.pinyon{
    font-family: 'Lexend Mega';
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -0.2em;
}
.date{
    font-size:.6em;
}
.tag{
    display:inline-flex;
    color:rgb(47, 105, 107);
    background:rgb(238, 238, 238);
    border-radius:8px;
    padding:2px;
    margin:3px;
        font-family: monospace;
   box-shadow:3px 3px rgb(109, 109, 109);
}
</style>
