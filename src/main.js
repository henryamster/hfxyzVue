import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import store from "./store";
import router from "./router";
import vCodePen from "./codepen";
import firebase from "./firebase";
import VueAnalytics from 'vue-analytics';
import VueQuill from 'vue-quill'

 
Vue.use(VueQuill);

Vue.use(VueAnalytics, {
  id: 'UA-111724736-1'
})

Vue.use(firebase);

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(vCodePen);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
