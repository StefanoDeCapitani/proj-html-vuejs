<template>
  <div class="container">
    <div class="row-cols-2 blog-heading">
      <div class="col">
        <h2 class="text-xxl">
          Marketing Resources: Insider Advice on How to Increase Online Sales
        </h2>
      </div>
      <div class="col">
        <a href="#" class="a btn--primary btn--explore"
          >Explore All Resources</a
        >
      </div>
    </div>
    <div class="row-cols-3">
      <div class="col">
        <ArticleCard
          imgSrc="../assets/img/blog-posts-6.jpg"
          imgAlt="Case Study 3"
          articleHref="#"
        >
          Marketing Tips And Tricks For Your Website
        </ArticleCard>
      </div>
      <div class="col">
        <ArticleCard
          imgSrc="../assets/img/blog-posts-5.jpg"
          imgAlt="Case Study 3"
          articleHref="#"
        >
          How to Write Stunning Blog Post Titles
        </ArticleCard>
      </div>
      <div class="col">
        <ArticleCard
          imgSrc="../assets/img/blog-posts-4.jpg"
          imgAlt="Case Study 3"
          articleHref="#"
        >
          Techniques to Reduce Facebook Ads Spend
        </ArticleCard>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "Blog",
  components: {
    ArticleCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.container {
  padding-top: $container-padding-big;
  padding-bottom: $container-padding-big;
  .blog-heading {
    padding-bottom: 64px;
    .btn--explore {
      padding: 20px 41px;
      font-size: $fs-xs;
    }
  }
  .row-cols-2 {
    .col {
      @include flex(row, 0, flex-end, flex-end);
    }
  }
}
</style>
