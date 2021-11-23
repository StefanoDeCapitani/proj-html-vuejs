<template>
  <main>
    <Hero />
    <ThreeStepsSection />
    <Brands />
    <CaseStudies />
  </main>
</template>

<script>
import Hero from "./Hero.vue";
import ThreeStepsSection from "./ThreeStepsSection.vue";
import Brands from "./Brands.vue";
import CaseStudies from "./CaseStudies.vue";

export default {
  name: "Main",
  components: {
    Hero,
    ThreeStepsSection,
    Brands,
    CaseStudies,
  },
};
</script>

<style lang="scss" scoped></style>
