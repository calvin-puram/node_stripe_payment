import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";
import Nprogress from "nprogress";

Vue.config.productionTip = false;
Nprogress.configure({ showSpinner: true });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
