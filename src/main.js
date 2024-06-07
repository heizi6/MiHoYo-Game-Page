import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import router from "@/router/Router";
import "@/mockjs/data";
import "@/utils/index";

Vue.config.productionTip = false;

Vue.directive("color", {
  inserted() {},
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
