import store from "./store";
import Firebase from "firebase";
require("dotenv").config();



var firebaseConfig = {
  apiKey: "AIzaSyBk9TVjG5eHYUbwm6e50fhQvpISSek-8Pg",
  authDomain: "henryfritz-30302.firebaseapp.com",
  databaseURL: "https://henryfritz-30302.firebaseio.com",
  projectId: "henryfritz-30302",
  storageBucket: "henryfritz-30302.appspot.com",
  messagingSenderId: "341982203008"
};

// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_APIKEY,
//   authDomain: process.env.VUE_APP_AUTHDOMAIN,
//   databaseURL: process.env.VUE_APP_DATABASEURL,
//   projectId: process.env.VUE_APP_PROJECTID,
//   storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
// };


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
