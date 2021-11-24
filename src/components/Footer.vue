<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-4_12">
          <h2 class="text-xl footer__heading">
            Grow Your Online Business Strategically, and Improve Customer
            Retention.
          </h2>
          <SocialButtons />
        </div>
        <div class="col-8_12">
          <SiteMap />
        </div>
      </div>
      <div class="attribution">
        <p>© 2020 • Avada Consultant • Powered by WordPress</p>
        <p>Call Us (555) 802-1234</p>
        <p>info@yourcompany.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";
import SiteMap from "./SiteMap.vue";

export default {
  name: "Footer",
  components: {
    SocialButtons,
    SiteMap,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container {
  padding-top: $container-padding;
  padding-bottom: $container-padding;
  .row {
    align-items: flex-start;
    padding-bottom: $container-padding;
    .footer__heading {
      padding-bottom: 38px;
    }
  }
  .attribution {
    @include flex(row, 0, center, space-between);
    padding: 16px;
  }
}
</style>
