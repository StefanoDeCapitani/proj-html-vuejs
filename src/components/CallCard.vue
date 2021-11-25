<template>
  <div class="container">
    <div class="card call-card" :class="classStickyCallCard">
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
  props: {
    stickyCallCard: String,
  },
  data() {
    return {
      classStickyCallCard: "",
    };
  },
  watch: {
    stickyCallCard: function (newValue) {
      this.classStickyCallCard = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.container {
  padding-top: $container-padding;
  padding-bottom: $container-padding;
  min-height: 311px;
  .card {
    @include flex(row, 1rem, center, space-between);
    background-color: white;
    margin: auto;
    padding: 1rem 4rem;
    width: 100%;
    transform: translateY(10%);
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    max-width: 1200px;
    opacity: 1;
    transition: $transition;
    &.sticky {
      position: fixed;
      top: 0;
      z-index: 1;
      &.go-up {
        opacity: 0;
      }
    }
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
