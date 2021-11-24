<template>
  <div class="hero">
    <div class="container">
      <div class="row-cols-2">
        <div class="col">
          <section class="hero__section section-xl">
            <h1>Unlock your online growth potential</h1>
            <p>
              Online marketing to secure customer retention, leads, and sales.
              We focus on the bigger picture.
            </p>
            <button class="btn btn--white">
              Our Services <FontAwesomeIcon class="icon" icon="arrow-right" />
            </button>
          </section>
        </div>
        <div class="col">
          <FormCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import FormCard from "./FormCard.vue";

export default {
  name: "Hero",
  components: {
    FontAwesomeIcon,
    FormCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.hero {
  background-image: url("../assets/img/marketing-intro.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
  backdrop-filter: brightness(0.5);

  .hero__section {
    @include flex(column, 42px);
    padding: 110px 3rem 0;
    margin: auto;
    .icon {
      font-size: 0.8rem;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
    }
  }
  .card {
    transform: translateY(10%);
  }
}
</style>
