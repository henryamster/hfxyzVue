<template>
  <div class="column">
    <div :key="inq" v-for="inq in inquiriesCollection">
      <h2 class="is-size-2">{{inq.name}}</h2>
      <p class="is-size-4 is-italic">{{inq.email}}</p>
      <p class="is-size-4">{{inq.phone}}</p>
      <p class="is-size-6">{{inq.message}}</p>
      <hr>
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
        this.inquiriesCollection = inquiriesCollection;
      });
  },
  methods: {
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
