<template>
  <div class="social-buttons">
    <FontAwesomeIcon :icon="['fab', 'facebook']" />
    <FontAwesomeIcon :icon="['fab', 'twitter']" />
    <FontAwesomeIcon :icon="['fab', 'instagram']" />
    <FontAwesomeIcon :icon="['fab', 'youtube']" />
    <FontAwesomeIcon :icon="['fab', 'linkedin']" />
    <FontAwesomeIcon :icon="['fab', 'tiktok']" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "SocialButtons",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.social-buttons {
  @include flex(row, 1rem);
}
</style>
