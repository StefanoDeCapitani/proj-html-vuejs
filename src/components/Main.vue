<template>
  <main class="main">
    <div class="header-placeholder"></div>
    <FloatingToggles />
    <Hero />
    <ThreeStepsSection />
    <Brands />
    <CallCard :sticky-call-card="classStickyCallCard" />
    <CaseStudies />
    <div class="bg-secondary--light">
      <ClientRelationship />
      <Awards />
    </div>
    <Testimonial />
    <div class="bg-secondary--light">
      <Blog />
    </div>
    <div class="bg-dark">
      <CallToAction />
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
import CallToAction from "./CallToAction.vue";
import FloatingToggles from "./FloatingToggles.vue";

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
    CallToAction,
    FloatingToggles,
  },
  props: {
    stickyCallCard: String,
  },
  data() {
    return {
      classStickyCallCard: "",
    };
  },
  watch: {
    stickyCallCard: function (newValue) {
      this.classStickyCallCard = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-placeholder {
  height: 111px;
}
</style>
