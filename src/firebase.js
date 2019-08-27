import store from "./store";
import Firebase from "firebase";
const dotenv = require("dotenv").config();

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   databaseURL: process.env.databaseURL,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId
// };

var firebaseConfig = {
  apiKey: "AIzaSyBk9TVjG5eHYUbwm6e50fhQvpISSek-8Pg",
  authDomain: "henryfritz-30302.firebaseapp.com",
  databaseURL: "https://henryfritz-30302.firebaseio.com",
  projectId: "henryfritz-30302",
  storageBucket: "henryfritz-30302.appspot.com",
  messagingSenderId: "341982203008"
};

// firebase.initializeApp(firebaseConfig);

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(firebaseConfig);
    Vue.prototype.$firebase = firebase;
    const auth = firebase.auth();
    const db = firebase.firestore();
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass);
      },
      logout: async () => {
        await auth.signOut();
      },
      createAcc: async (email, pass) => {
        return await auth.createUserWithEmailAndPassword(email, pass);
      }
    };
    auth.onAuthStateChanged(user => {
      store.commit("updateUser", { user });
    });
  }
};

/** 
 * import firebase from "firebase";
import { firebaseConfig } from "./firebaseConf";
 */
