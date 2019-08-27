<template>
<div class="blog">
 <div class="column">
      <h2 class="pageAnchor">//Blog</h2>
    </div>
    <div class="post-container column columns is-10 is-offset-1">
<div :key="post" v-for="post in postCollection" class="column is-5">
   <Post :post="post"  />
      <p></p>
      <hr>
    </div>
    </div>
</div>
       
    
</template>
<script>
import Post from '../reusables/Post';
export default {
    components:{
        Post
    },
  data() {
    return { postCollection: [] };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("blog")
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
