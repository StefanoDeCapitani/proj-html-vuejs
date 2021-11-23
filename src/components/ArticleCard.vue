<template>
  <div class="article-card">
    <a :href="articleHref" class="a article__img-container">
      <img
        class="article__img"
        :src="require('../' + imgSrc.replace('../', ''))"
        :alt="imgAlt"
      />
    </a>
    <a :href="articleHref" class="a article__heading text-xl">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    imgSrc: String,
    imgAlt: String,
    articleHref: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.article-card {
  padding: 28px 0;
  .article__img-container {
    position: relative;
    margin-bottom: 28px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 5px;
      background-color: transparent;
      background: linear-gradient(
        hsl(21, 94%, 52%, 0) 0%,
        hsl(21, 94%, 52%, 0.7) 90%
      );
      opacity: 0;
      transition: $transition;
    }
  }

  .article__img-container:hover {
    &::before {
      opacity: 1;
    }
  }
  .article__heading {
    transition: $transition;
  }
  .article__heading:hover {
    color: $clr-primary;
  }
}
</style>
