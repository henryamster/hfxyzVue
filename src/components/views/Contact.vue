<template>
  <div>
    <div class="column">
      <h2 class="pageAnchor">//Contact</h2>
    </div>
    <div class="columns level p-top" id="contact">
      <div class="column is-2 is-offset-1 level-item aos-init aos-animate" data-aos="fade-up-right">
        <h2 class="is-size-2">Want to get in contact?</h2>
        <p>
          The best way to get ahold of me is by
          <a href="mailto:henryamsterfritz@gmail.com">email</a> or by filling out this form. I do have a phone but I do not have voicemail, sorry!
        </p>
      </div>
      <div class="column is-4 level-item aos-init aos-animate" data-aos="fade-up-left">
        <form action class="box">
          <ul>
            <li>
              <label>Name:</label>
              <b-input v-model="name" name="name" type="text" id="name"></b-input>
            </li>

            <li>
              <label for="message">Message:</label>
              <b-input type="textarea" v-model="message" name="message" id="message" rows="12"></b-input>
            </li>
            <li>
              <label for="email">Email:</label>
              <b-input name="email" v-model="email" type="email" id="email"></b-input>
            </li>
            <li>
              <label for="tel">Phone:</label>
              <b-input name="tel" v-model="tel" type="tel" id="tel"></b-input>
            </li>
            <li>
              <a class="button is-primary has-text-white" v-on:click="saveInq" id="submit">Submit</a>
            </li>
            <p id="alert"></p>
          </ul>
        </form>
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return { name: "", message: "", email: "", tel: "" };
  },
  methods: {
    success(user) {
      this.$buefy.toast.open({
        message: `Inquiry Sent!`,
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
      this.name = "";
      this.message = "";
      this.email = "";
      this.tel = "";
    },
    saveInq(name, message, email, tel) {
      const self = this;
      const db = this.$firebase.firestore();
      db.collection("/inquiries")
        .add({
          name: this.name,
          message: this.message,
          email: this.email,
          phone: this.tel
        })
        .then(
          function(user) {
            self.success(`Inquiry submitted!`);
            self.$router.push({ path: "/" });
          },
          function(err) {
            self.danger(err);
          }
        );
    }
  }

  // function saveMessage(name, messageText, email, phone) {
  //   // Adds a new message entry to the Realtime Database.

  //    return firebase.database().ref('/inquiry').push({
  //     name: name,
  //     text: messageText,
  //     email: email,
  //     phone: phone

  //   })
  // }
};
</script>
<style>
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
#contact {
  padding-top: 6em;
  padding-bottom: 2em;
  margin: 8px;
}
label {
  font-size: 1.2em;
}
input,
textarea {
  width: 100%;
  font-size: 1em;
  font-family: "Century Gothic";
  font-weight: 800;
  border: 0;
  padding: 4px;
  border-radius: 5px;
  background: #FCFCFC;
  margin: 2px;
  border-bottom: 3px solid #DCDCDC;
}
#submit {
  margin: 20px 0 20px 0;
}
#alert {
  color: red;
  font-weight: 800;
}
</style>
