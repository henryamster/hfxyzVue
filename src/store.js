import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import db from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    inquiries: []
  },
  mutations: {
    updateUser(state, { user }) {
      Vue.set(state, "user", user);
    },
    ...vuexfireMutations
  },
  getters: {
    user: state => state.user
  },

  actions: {
    bindInquiriesRef: firestoreAction(context => {
      return context.bindFirestoreRef("inquiries", db.collection("inquiries"));
    })
  }
});
