<template>
  <a class="a arcticle-card" :href="arcticleHref">
    <img :src="require('../' + imgSrc.replace('../', ''))" :alt="imgAlt" />
    <p class="text-xl">
      <slot></slot>
    </p>
  </a>
</template>

<script>
export default {
  name: "ArcticleCard",
  props: {
    imgSrc: String,
    imgAlt: String,
    arcticleHref: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/utilities";
</style>
