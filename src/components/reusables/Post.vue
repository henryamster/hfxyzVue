<template>
    <div class="post">
         <router-link :to="'/blog/'+post.slug">
      <p class=" pinyon">{{post.title}}</p>
      </router-link>
      <img v-if="post.imageURL" :src="post.imageURL" class="is-fullwidth is-marginless is-paddingless">
        <Codepen v-if="post.codepen" :slug="post.codepen"></Codepen>
    <br/>
      <p class="has-text-link is-italic date">Posted: {{new Date(post.posted.seconds*1000)}}</p>
      <p class="has-text-link is-italic date" v-if="post.edited">Last Edited: {{new Date(post.posted.seconds*1000)}}</p>
       <router-link v-if="user" :to="'/editpost/'+post.slug" class="button">Edit</router-link>
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
import Codepen from './Codepen';
import store from '../../store';
export default {
    
    components:{ Codepen},
    props:{
        post: Object
    },
    data:function(){return {
        user:store.state.user
    }
    } 
}
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Text|Quicksand|Pinyon+Script&display=swap");
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
    font-family: 'Quicksand';
    font-weight: 100;
  
    line-height:1.4em;
    font-size:2em;
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
