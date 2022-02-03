import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import store from "@/store";
import axios from "axios";
import io from "socket.io-client";
import "@/assets/css/common.scss";

Vue.prototype.$http = axios;
Vue.prototype.$socket = io("http://localhost:3000");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
