import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "@/views/Chatroom.vue";

import { getAuth } from "firebase/auth";
// auth guard
const requireAuth = (to, from, next) => {
  let user = getAuth().currentUser;
  // console.log("current user in auth guad: ", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

// auth guard
const requireNoAuth = (to, from, next) => {
  let user = getAuth().currentUser;
  // console.log("current user in auth guad: ", user);
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
