<template>
  <div class="createPost">
    <div class="column">
      <h2 class="pageAnchor">// Edit Blog Post</h2>
    </div>
    <div class="column is-10 is-offset-1 columns">
      <div class="column is-5">
        <h2>Post</h2>
        <label for="title">title:</label>
        <b-input v-model="post.title" name="title"></b-input>
        <label for="slug">slug:</label>
        <b-input v-model="post.slug" name="slug"></b-input>
        <label for="content">content:</label>
       <quill v-model="post.content" output="html"  name="content" id="content"></quill>
    
        <label for="imageURL">image URL:</label>
        <b-input v-model="post.imageURL"></b-input>
        <label for="codepen">Codepen:</label>
        <b-input v-model="post.codepen"></b-input>
        <label for="youtube">Youtube:</label>
        <b-input v-model="post.youtube"></b-input>
        <label for="tags">tags:</label>
        <b-taginput v-model="post.tags" name="tags"></b-taginput>

        <label for="links">links:</label>
        <b-taginput v-model="post.links" name="links"></b-taginput>
      </div>
      <div class="column is-5">
        <h2>Preview</h2>
        <Post :post="postCollator" />
        <a @click="postEdit" class="button is-primary">Post!</a>
        <a @click="clearForm" class="button">Clear Form</a>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../reusables/Post";
export default {
  components: { Post },
  data() {
    return {
      post: {
        slug: this.$route.params.slug,
        title: "",
        content: "",
        imageURL: "",
        codepen: "",
        posted: "",
        links: [],
        tags: []
      }
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    let post;
    db.collection("blog")
      .where("slug", "==", this.$route.params.slug)
      .get()
      .then(snap => {
        if (!snap.empty) {
          snap.forEach(doc => {
            post = doc.data();
          });
        } else {
          post = {
            title: "Blog Post Not Found",
            content: "This post is currently unavailable"
          };
        }
        this.post = post;
        console.log(post);
      });
  },
  computed: {
    postCollator() {
      return {
        title: this.post.title,
        content: this.post.content,
        imageURL: this.post.imageURL,
        codepen: this.post.codepen,
        posted: this.post.posted,
        links:
          this.post.links.indexOf(",") > 0
            ? this.post.links.split(",")
            : this.post.links,
        tags:
          this.post.tags.indexOf(",") > 0
            ? this.post.tags.split(",")
            : this.post.tags,
        slug: this.post.slug,
        edited: new Date()
      };
    }
  },
  methods: {
    postEdit() {
      const self = this;
      const db = this.$firebase.firestore();
      let selectedPost;
      let blogRef = db.collection("blog");
      blogRef
        .where("slug", "==", this.post.slug)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            selectedPost = doc.id;
            blogRef
              .doc(selectedPost)
              .update(this.postCollator)
              .then(
                function() {
                  self.success();
                  self.$router.push({ path: "/blog" });
                },
                function(err) {
                  self.danger(err);
                }
              );
          });
        });
    },
    success(user) {
      this.$buefy.toast.open({
        message: `Post Updated!`,
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
      this.post.title = "";
      this.post.content = "";
      this.post.imageURL = "";
      this.post.codepen = "";
      this.post.links = [];
      this.post.tags = [];
      this.post.slug = "";
    }
  }
};
</script>
