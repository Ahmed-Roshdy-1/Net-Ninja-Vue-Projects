import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let app;
onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
