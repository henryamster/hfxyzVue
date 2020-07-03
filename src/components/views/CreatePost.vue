<template>
<div class="createPost"><div class="column">
<h2 class="pageAnchor">// Create Blog Post</h2>
</div>
<div class="column is-10 is-offset-1 columns">

<div class="column is-5">
<h2>Post</h2>
<label for="title">title:</label> <b-input v-model="title"  name="title"></b-input>
<label for="slug">slug:</label> <b-input v-model="slug"  name="slug"></b-input>
<label for="content">content:</label>
<b-input type="textarea" v-model="content" name="content" id="content" rows="12"></b-input>

<label for="imageURL">image URL:</label> <b-input v-model="imageURL"  ></b-input>
<label for="codepen">Codepen:</label><b-input v-model="codepen"  ></b-input>
<label for="youtube">Youtube:</label><b-input v-model="youtube"  ></b-input>
<label for="tags">tags:</label> <b-taginput v-model="tags"  name="tags"></b-taginput>

<label for="linkURLs">links:</label> <b-taginput v-model="linkURLs"  name="linkURLs"></b-taginput>
</div>
<div class="column is-5">
<h2>Preview</h2>
<Post :post="postCollator" />
<a @click="post" class="button is-primary">Post!</a>
</div>

</div></div>
    
</template>

<script>
import Post from '../reusables/Post';

export default {
    components: {Post},
    data() {
        return {title: '', content: '', imageURL: '', codepen : "", youtube:"",  posted: new Date(), linkURLs: [], tags: [], slug:''}
    },
    computed: {
        postCollator(){
            return {title: this.title, 
            content: this.content,
            imageURL: this.imageURL,
            codepen: this.codepen,
            youtube: this.youtube,
            posted: new Date(),
            links: this.linkURLs.indexOf(',') > 0 ? this.linkURLs.split(',') : this.linkURLs,
            tags: this.tags.indexOf(',') > 0 ? this.tags.split(','): this.tags,
            slug: this.slug
            
            }

        }
    },
    methods:{
        post(){
            const self = this;
            const db = this.$firebase.firestore();
    db.collection("blog").add(this.postCollator).then(
        function() {
            self.success();
            self.$router.push({ path: "/blog" });
          },
          function(err) {
            self.danger(err);
          }
    );
        },
        success(user) {
      this.$buefy.toast.open({
        message: `Post Submitted!`,
        type: "is-success"
      });
      this.clearForm();
    },
    danger(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-bottom",
        type: "is-danger"
      });
    },
    clearForm() {
      this.title = "";
      this.content = "";
      this.imageURL = "";
      this.codepen= "";
      this.youtube= "";
      this.linkURLs = [];
      this.tags =[];
    this.slug="";
    },
    }
}
</script>
