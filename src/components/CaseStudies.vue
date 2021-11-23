<template>
  <div class="container">
    <h2 class="text-xxl text-center">Trusted by Leading Organizations</h2>
    <div class="row-cols-3">
      <div class="col">
        <ArcticleCard
          imgSrc="../assets/img/case-studies-1.jpg"
          imgAlt="Case Study 1"
          arcticleHref="#"
        >
          How Spaces attracted five million visitors by improving the content
        </ArcticleCard>
        <p class="text-xxl">200%</p>
        <p>Higher revenue from digital</p>
      </div>
      <div class="col">
        <ArcticleCard
          imgSrc="../assets/img/case-studies-4.jpg"
          imgAlt="Case Study 2"
          arcticleHref="#"
        >
          Creativity helped Hemisferio to increase their brand reach vertically
        </ArcticleCard>
        <p class="text-xxl">10x</p>
        <p>Sales increase with the same ad spend</p>
      </div>
      <div class="col">
        <ArcticleCard
          imgSrc="../assets/img/case-studies-6.jpg"
          imgAlt="Case Study 3"
          arcticleHref="#"
        >
          How DigitalBox used AI-powered data insight to boost sales
        </ArcticleCard>
        <p class="text-xxl">3-year</p>
        <p>Partnership with Avada Consultant</p>
      </div>
    </div>
    <button class="btn btn--primary">Read More Case Studies</button>
  </div>
</template>

<script>
import ArcticleCard from "./ArcticleCard.vue";
export default {
  name: "CaseStudies",
  components: {
    ArcticleCard,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/utilities";
</style>
