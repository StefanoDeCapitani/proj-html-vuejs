import Vue from "vue";
import App from "./App.vue";
import "@fontsource/dm-sans";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faArrowRight,
  faSeedling,
  faParachuteBox,
  faSearchPlus,
  faPlusSquare,
  faPoll,
  faChevronDown,
  faShoppingCart,
  faComments,
  faTimes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTiktok,
  faHubspot,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhoneAlt,
  faArrowRight,
  faSeedling,
  faParachuteBox,
  faLightbulb,
  faSearchPlus,
  faPlusSquare,
  faPoll,
  faChevronDown,
  faShoppingCart,
  faComments,
  faTimes,
  faPaperPlane,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTiktok,
  faHubspot
);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
