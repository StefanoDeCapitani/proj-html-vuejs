<template>
  <div class="container">
    <div class="row-cols-2">
      <div class="col">
        <section class="cta__section section-xl">
          <h2>Let’s Make Things Happen</h2>
          <p>
            Curabitur ac leo nunc. Vestibulum et mauris <br />
            vel ante finibus maximus nec ut leo. Integer consectetur.
          </p>
        </section>
        <figure class="col-4_6 testimonial-review">
          <blockquote class="quote">
            <p class="text-l">
              “The team at Avada Marketing Consultant is fabulous. They helped
              us unlock our potential online and offline. We have experienced
              year on year growth due to their progressive approach.”
            </p>
          </blockquote>
          <figcaption class="caption">
            <p class="text-xs">George Anderson</p>
            <p class="text-xxs">Digitalbox CEO</p>
          </figcaption>
        </figure>
      </div>
      <div class="col">
        <FormCard />
      </div>
    </div>
  </div>
</template>

<script>
import FormCard from "./FormCard.vue";

export default {
  name: "CallToAction",
  components: {
    FormCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container {
  color: white;
  padding-top: $container-padding-medium;
  padding-bottom: $container-padding-medium;

  .cta__section,
  .testimonial-review {
    display: grid;
    gap: 32px;
  }

  .cta__section {
    position: relative;
    padding-bottom: 42px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid $clr-secondary;
      width: 99px;
    }
  }
  .testimonial-review {
    padding-top: 42px;
  }

  .testimonial-review {
    .quote {
      font-style: italic;
    }
    .caption {
      line-height: 1.5rem;
    }
  }
}
</style>
