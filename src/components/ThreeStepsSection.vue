<template>
  <div class="container">
    <div class="row-cols-2">
      <div class="col"><img src="../assets/img/awareness.svg" alt="" /></div>
      <div class="col">
        <div>
          <FontAwesomeIcon :icon="['far', 'lightbulb']" />
          <p>Business Growth</p>
        </div>
        <section class="section-xxl">
          <h3 class="text-xxl">Increase Brand Awareness</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            placerat luctus. Nullam sit amet ante sed orci convallis gravida et
            at massa.
          </p>
          <button class="btn btn--primary">Get a Consultation</button>
        </section>
      </div>
    </div>
    <div class="row-cols-2">
      <div class="col">
        <img src="../assets/img/sales_training.svg" alt="" />
      </div>
      <div class="col">
        <div>
          <FontAwesomeIcon :icon="['fas', 'parachute-box']" />
          <p>Investors In People</p>
        </div>
        <section class="section-xxl">
          <h3 class="text-xxl">In-House Sales Training</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            placerat luctus. Nullam sit amet ante sed orci convallis gravida et
            at massa.
          </p>
          <button class="btn btn--primary">Get a Consultation</button>
        </section>
      </div>
    </div>
    <div class="row-cols-2">
      <div class="col">
        <img src="../assets/img/social_proof.svg" alt="" />
      </div>
      <div class="col">
        <div>
          <FontAwesomeIcon :icon="['fas', 'seedling']" />
          <p>Social Media Analisys</p>
        </div>
        <section class="section-xxl">
          <h3 class="text-xxl">Harness Your Social Proof</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            placerat luctus. Nullam sit amet ante sed orci convallis gravida et
            at massa.
          </p>
          <button class="btn btn--primary">Get a Consultation</button>
        </section>
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

<style></style>
