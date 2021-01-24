<template>
    <div class="entry">
        <div class="column is-10 is-offset-1">
             <p class="is-size-6 tag links">
                linkable address: https://henryfritz/xyz/blog/{{slug}}
            </p>
            <Post :post="post" class="entrySize"/>
           
            <!-- {{JSON.stringify($route.params)}} -->
            <router-link to="/blog" class="pageAnchor links"> Go back to blog</router-link> 
        </div>

    </div>
</template>
<script>
   import Post from '../reusables/Post';
export default {
    components:{
        Post
    },
    data(){
        return {post :new Object(),
        slug: this.$route.params.slug  };
    },
     mounted() {
    const db = this.$firebase.firestore();
     let post;
    db.collection("blog")
    .where('slug', '==', this.slug )
      .get()
      .then(snap => {
        if(!snap.empty){
          snap.forEach(doc=>{
              post = doc.data()
          })
        }
        else{
            post = {title: 'Blog Post Not Found', content:'This post is currently unavailable'}
        }
        this.post = post
      });
  },
}
</script>
<style >
 .entry{
     padding-bottom:80px;
     
 }
 .entrySize{
     font-size:23px;
 }
 .links{
     padding: 18px;
    
    border-radius: 12px;
 }
</style>