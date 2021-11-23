import Vue from "vue";
import App from "./App.vue";
import "@fontsource/dm-sans";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faParachuteBox } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
library.add(faPhoneAlt, faArrowRight, faSeedling, faParachuteBox, faLightbulb);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
