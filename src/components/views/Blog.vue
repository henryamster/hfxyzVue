<template>
<div class="blog">
 <div class="column">
      <h2 class="pageAnchor">//Blog</h2>
    </div>
    <div class="post-container is-fluid column columns is-10 is-offset-1 is-multiline">
<div :key="post" v-for="(post, index) in postCollection" class="column is-6">
   <Post :post="post" v-bind:class="index%2==0? 'slide-from-left': 'slide-from-right' "/>
   
      <p></p>
      <!-- <hr> -->
    </div>
    <div class="column is-1"></div>
    </div>
</div>
       
    
</template>
<script>
import Post from '../reusables/Post';
export default {
    components:{
        Post
    },
    props:{
      posts: {
        type: String,
        default: '6'
      }
    },
  data() {
    return { postCollection: [] };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("blog").orderBy('posted', 'desc').limit(parseInt(this.posts))
      .get()
      .then(snap => {
        const postCollection = [];
        snap.forEach(doc => {
          postCollection.push(doc.data());
        });
        this.postCollection = postCollection;
      });
  },
}
</script>
<style>

</style>
