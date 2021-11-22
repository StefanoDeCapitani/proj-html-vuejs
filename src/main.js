import Vue from "vue";
import App from "./App.vue";
import "@fontsource/dm-sans";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt, faArrowRight);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
