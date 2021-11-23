<template>
  <div class="container">
    <div class="section-xxl text-center">
      <h2 class="text-xxl section-heading">Some Brands We Work With</h2>
      <p class="text-s">
        Quisque aliquet, libero consequat elementum convallis.
      </p>
    </div>
    <div class="row-cols-6 brands">
      <div class="col brand-logo">
        <img src="../assets/img/abstract.png" alt="Abstract logo" />
      </div>
      <div class="col brand-logo">
        <img src="../assets/img/cglobal.png" alt="Cglobal logo" />
      </div>
      <div class="col brand-logo">
        <img src="../assets/img/next.png" alt="Next logo" />
      </div>
      <div class="col brand-logo">
        <img src="../assets/img/hemisferio.png" alt="Hemisferio logo" />
      </div>
      <div class="col brand-logo">
        <img src="../assets/img/spaces.png" alt="Spaces logo" />
      </div>
      <div class="col brand-logo">
        <img src="../assets/img/digitalbox.png" alt="Digitalbox logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brands",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/utilities";
.container {
  padding: $container-padding 0 0;
  .section-heading {
    padding-bottom: 30px;
  }
  .brand-logo {
    padding: 62px 12px;
  }
}
</style>
