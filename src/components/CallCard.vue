<template>
  <div class="container">
    <div class="card">
      <div class="card__profile">
        <img
          class="card__profile-image"
          src="../assets/img/marketing-expert-cta.png"
          alt="Richard Madsen profile image"
        />
        <div>
          <p class="card__name text-s">Sandy Reiff</p>
          <p class="card__professional-title text-xs">
            Marketing consultant expert
          </p>
        </div>
      </div>
      <p class="text-m">Drive Leads and Sales with Avada</p>
      <a class="a btn--primary-light" href="tel:5558021234">
        <PhoneNumber>(555) 802-1234</PhoneNumber>
      </a>
    </div>
  </div>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";
export default {
  name: "CallCard",
  components: {
    PhoneNumber,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/utilities";
.container {
  padding: $container-padding 0;
  .card {
    @include flex(row, 1rem, center, space-between);
    background-color: white;
    margin: auto;
    padding: 1rem 4rem;
    width: 100%;
    transform: translateY(10%);
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    .card__profile {
      @include flex(row, 1.2rem, center);
      .card__professional-title {
        color: $clr-secondary;
      }
      .card__profile-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
}
</style>
