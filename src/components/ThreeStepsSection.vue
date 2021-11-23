<template>
  <div class="container">
    <div class="row row-cols-2">
      <div class="col section-image">
        <img src="../assets/img/awareness.svg" alt="" />
      </div>
      <div class="col row">
        <div class="col-4_6">
          <div class="section-overline">
            <span class="icon-container bg-info">
              <FontAwesomeIcon :icon="['far', 'lightbulb']" />
            </span>
            <p class="text-s">Business Growth</p>
          </div>
          <section class="section section-xxl">
            <h3 class="text-xxl">Increase Brand Awareness</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor placerat luctus. Nullam sit amet ante sed orci convallis
              gravida et at massa.
            </p>
            <button class="btn btn--primary">Get a Consultation</button>
          </section>
        </div>
      </div>
    </div>
    <div class="row-cols-2 flip-content">
      <div class="col section-image">
        <img src="../assets/img/sales_training.svg" alt="" />
      </div>
      <div class="col row">
        <div class="col-4_6">
          <div class="section-overline text-s">
            <span class="icon-container bg-warning"
              ><FontAwesomeIcon :icon="['fas', 'parachute-box']"
            /></span>
            <p>Investors In People</p>
          </div>
          <section class="section section-xxl">
            <h3 class="text-xxl">In-House Sales Training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor placerat luctus. Nullam sit amet ante sed orci convallis
              gravida et at massa.
            </p>
            <button class="btn btn--primary">Get a Consultation</button>
          </section>
        </div>
      </div>
    </div>
    <div class="row-cols-2">
      <div class="col section-image">
        <img src="../assets/img/social_proof.svg" alt="" />
      </div>
      <div class="col row">
        <div class="col-4_6">
          <div class="section-overline text-s">
            <span class="icon-container bg-success"
              ><FontAwesomeIcon :icon="['fas', 'seedling']"
            /></span>
            <p>Social Media Analisys</p>
          </div>
          <section class="section section-xxl">
            <h3 class="text-xxl">Harness Your Social Proof</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor placerat luctus. Nullam sit amet ante sed orci convallis
              gravida et at massa.
            </p>
            <button class="btn btn--primary">Get a Consultation</button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ThreeStepsSection",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/utilities";

.container {
  padding: $container-padding 0;
  .flip-content {
    .section-image {
      order: 1;
    }
  }
  .section-image {
    padding: 2rem;
  }
  .section-overline {
    @include flex(row, 0.8rem, center);
    padding-bottom: 24px;
    .icon-container {
      display: inline-block;
      border-radius: 50%;
      color: white;
      width: 46px;
      height: 46px;
      display: grid;
      place-items: center;
    }
  }
  .section {
    @include flex(column, 41px);
  }
}
</style>
