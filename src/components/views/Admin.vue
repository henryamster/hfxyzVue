<template>
  <div class="column">
    <div class="column is-12 has-text-centered">
      <router-link to="/CreatePost" class="button is-primary">Create New Blog Post</router-link>
    </div>
    <div :key="inq.name" v-for="inq in inquiriesCollection">
      <h2 class="is-size-2">{{inq.name}}</h2>
      <p class="is-size-4 is-italic">{{inq.email}}</p>
      <p class="is-size-4">{{inq.phone}}</p>
      <p class="is-size-6">{{inq.message}}</p>
      <a v-on:click="archive(inq.name)" class="button">Archive Inquiry</a>
      <hr />
    </div>
    <a v-on:click="logout" class="button is-primary">log out</a>
  </div>
</template>
<script>
export default {
  data() {
    return { inquiriesCollection: [] };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("inquiries")
      .get()
      .then(snap => {
        const inquiriesCollection = [];
        snap.forEach(doc => {
          inquiriesCollection.push(doc.data());
        });
        //eliminate archived inquiries
        this.inquiriesCollection = inquiriesCollection.filter(
          inq => !inq.archived
        );
      });
  },
  methods: {
    archive(name) {
      const self = this;
      let selectedInq;
      const db = this.$firebase.firestore();
      let inqueryRef = db.collection("inquiries");
      inqueryRef
        .where("name", "==", name)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            selectedInq = doc.id;
            inqueryRef
              .doc(selectedInq)
              .update({
                archived: true
              })
              .then(
                () => {
                  self.inquiriesCollection = self.inquiriesCollection.filter(
                    inq => !inq.name == name
                  );
                  console.log("d");
                },
                err => self.danger(err)
              );
          });
        });
    },

    danger(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-bottom",
        type: "is-danger"
      });
    },
    logout() {
      let self = this;
      this.$auth.logout().then(
        function() {
          self.$router.push({ path: "/" });
        },
        function(err) {
          self.danger(err);
        }
      );
    }
  }
};
</script>
