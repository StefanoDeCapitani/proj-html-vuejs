<template>
  <div class="container">
    <div class="row-cols-2">
      <div class="col testimonial-photo">
        <img
          src="../assets/img/large-testimonial.jpg"
          alt="Testimonial photo"
        />
      </div>
      <div class="col row">
        <figure class="col-4_6 testimonial-review">
          <blockquote class="quote">
            <p class="text-l">
              “The team at Avada Marketing Consultant is fabulous. They helped
              us unlock our potential online and offline. We have experienced
              year on year growth due to their progressive approach.”
            </p>
          </blockquote>
          <figcaption class="caption">
            <p class="text-xs">Kate Schadler</p>
            <p class="text-xxs">Marketing Consultant – Abstract</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.container {
  padding-top: $container-padding-medium;
  padding-bottom: $container-padding-medium;

  .testimonial-photo {
    @include flex(column, 0, flex-end);
    img {
      border-radius: $border-radius;
      width: 80%;
      box-shadow: 16px 32px 40px -8px rgb(0 0 0 / 16%);
    }
  }
  .testimonial-review {
    display: grid;
    gap: 42px;

    .quote {
      line-height: 2rem;
      width: 25ch;
    }
    .caption {
      line-height: 1.5rem;
    }
  }
}
</style>
