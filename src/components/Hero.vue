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
  background-position: left;
  color: white;
  margin-bottom: 2.5rem;
  .hero__section {
    @include flex(column, 1rem);
    padding: 120px 3rem 0;
    margin: auto;
    .icon {
      font-size: 0.8rem;
    }
  }
}
</style>
