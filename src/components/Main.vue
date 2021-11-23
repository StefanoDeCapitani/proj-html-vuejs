<template>
  <main>
    <Hero />
    <ThreeStepsSection />
    <Brands />
    <CallCard />
    <CaseStudies />
    <div class="bg-secondary">
      <ClientRelationship />
      <Awards />
    </div>
    <Testimonial />
    <div class="bg-secondary">
      <Blog />
    </div>
  </main>
</template>

<script>
import Hero from "./Hero.vue";
import ThreeStepsSection from "./ThreeStepsSection.vue";
import Brands from "./Brands.vue";
import CaseStudies from "./CaseStudies.vue";
import CallCard from "./CallCard.vue";
import ClientRelationship from "./ClientRelationship.vue";
import Awards from "./Awards.vue";
import Testimonial from "./Testimonial.vue";
import Blog from "./Blog.vue";

export default {
  name: "Main",
  components: {
    Hero,
    ThreeStepsSection,
    Brands,
    CallCard,
    CaseStudies,
    ClientRelationship,
    Awards,
    Testimonial,
    Blog,
  },
};
</script>

<style lang="scss" scoped></style>
