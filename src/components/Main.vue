<template>
  <main>
    <Hero />
    <ThreeStepsSection />
    <Brands />
    <CallCard />
    <CaseStudies />
  </main>
</template>

<script>
import Hero from "./Hero.vue";
import ThreeStepsSection from "./ThreeStepsSection.vue";
import Brands from "./Brands.vue";
import CaseStudies from "./CaseStudies.vue";
import CallCard from "./CallCard.vue";

export default {
  name: "Main",
  components: {
    Hero,
    ThreeStepsSection,
    Brands,
    CallCard,
    CaseStudies,
  },
};
</script>

<style lang="scss" scoped></style>
