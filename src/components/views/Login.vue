<template>
  <div id="logInForm">
    <div class="column">
      <h2 class="pageAnchor">//Log In</h2>
    </div>

    <div class="column is-offset-2 is-8 loginForm">
      <br>
      <b-field label="Name">
        <b-input v-model="email" placeholder="email"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="password" password-reveal></b-input>
      </b-field>
      <div class="buttons is-centered">
        <b-button type="is-primary" outlined @click="login">Log In</b-button>
        <b-button type="is-primary" @click="clearForm">Clear Form</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return { email: "", password: "" };
  },
  watch: {
    user(auth) {}
  },
  methods: {
    success(user) {
      this.$buefy.toast.open({
        message: `Logged in!`,
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
    login: function() {
      let self = this;
      this.$auth.login(this.email, this.password).then(
        function(user) {
          self.success(`You have logged in!`);
          self.$router.push({ path: "/admin" });
        },
        function(err) {
          self.danger(err);
        }
      );
    },
    clearForm() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style>
.loginForm {
  margin-top: 12em;
}
.notices.is-bottom {
  flex-direction: column-reverse;
}

@media screen and (max-width: 768px) {
  .notices {
    padding: 0;
    position: fixed !important;
  }
}
.notices {
  flex-direction: column;
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2em;
  overflow: hidden;
  width: 300px;
  z-index: 1000;
  pointer-events: none;
  color: whitesmoke;
}
.is-danger {
  background: rgb(214, 134, 124);
}
.is-success {
  background: yellowgreen;
}
</style>
