import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import VueFeather from "vue-feather";
import InstantSearch from "vue-instantsearch";
import 'drawflow/dist/drawflow.min.css'
import VueHtmlToPaper from "vue-html-to-paper";

Vue.use(VueFeather);
Vue.use(VueHtmlToPaper);
Vue.use(VueSkycons, {
  color: "#1e88e5",
});
Vue.use(InstantSearch);
Vue.config.productionTip = false;
Vue.use(Vuebar);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
