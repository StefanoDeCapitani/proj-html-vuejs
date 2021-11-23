<template>
  <div class="container">
    <h2 class="text-xxl text-center section-heading">
      Trusted by Leading Organizations
    </h2>
    <div class="case-studies">
      <div class="row-cols-3">
        <div class="col">
          <ArticleCard
            imgSrc="../assets/img/case-studies-1.jpg"
            imgAlt="Case Study 1"
            articleHref="#"
          >
            How Spaces attracted five million visitors by improving the content
          </ArticleCard>
          <p class="text-xxl numbers">200%</p>
          <p>Higher revenue from digital</p>
        </div>
        <div class="col">
          <ArticleCard
            imgSrc="../assets/img/case-studies-4.jpg"
            imgAlt="Case Study 2"
            articleHref="#"
          >
            Creativity helped Hemisferio to increase their brand reach
            vertically
          </ArticleCard>
          <p class="text-xxl numbers">10x</p>
          <p>Sales increase with the same ad spend</p>
        </div>
        <div class="col">
          <ArticleCard
            imgSrc="../assets/img/case-studies-6.jpg"
            imgAlt="Case Study 3"
            articleHref="#"
          >
            How DigitalBox used AI-powered data insight to boost sales
          </ArticleCard>
          <p class="text-xxl numbers">3-year</p>
          <p>Partnership with Avada Consultant</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="#" class="a btn--primary btn--read-more">
        Read More Case Studies
      </a>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
export default {
  name: "CaseStudies",
  components: {
    ArticleCard,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.container {
  padding-bottom: $container-padding;
  .section-heading {
    padding: 62px 0;
  }
  .case-studies {
    padding-bottom: 50px;
    .numbers {
      border-top: 1px solid $clr-secondary-light;
      padding: 28px 0 15px;
    }
  }
  .btn--read-more {
    font-size: $fs-xs;
    margin: 28px 0;
  }
}
</style>
