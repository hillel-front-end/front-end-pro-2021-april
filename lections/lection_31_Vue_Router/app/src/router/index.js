import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Candidates from "../views/Home/Candidates/Candidates.vue";
import MainPage from "../views/Home/MainPage.vue";

import About from "../views/About.vue";
import Auth from "../views/Auth.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

// console.log(store, "store");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    meta: {
      auth: false,
    },
    component: Auth,
  },
  {
    path: "/home", // => /home
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
    // children: [
    //   {
    //     path: "", // // => /home/candidates
    //     component: MainPage,
    //   },
    //   {
    //     path: "candidates", // // => /home/candidates
    //     component: Candidates,
    //   },
    // ],
  },
  {
    path: "/about",
    name: "About",
    meta: {
      auth: false,
    },
    component: About,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log("work fine!");
  if (!to.meta.auth) {
    return next();
  }

  const isAuth = store.state.isAuth;

  if (isAuth) {
    next();
    return;
  } else {
    next("/");
  }
});

export default router;
