import Vue from "vue";
import Router from "vue-router";
import Index from "./components/views/Index.vue";
import About from "./components/views/About.vue";
import Contact from "./components/views/Contact.vue";
import Projects from "./components/views/Projects.vue";
import Login from "./components/views/Login.vue";
import Admin from "./components/views/Admin.vue";
import store from "./store";
Vue.use(Router);

const router = new Router({
  routes: [
    // { path: "*", redirect: "/404" },
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    { path: "/projects", name: "projects", component: Projects },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.state.user) next("login");
  else next();
});

export default router;
