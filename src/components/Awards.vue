<template>
  <div class="container">
    <h3 class="text-l text-center">Awards</h3>
    <div class="row-cols-4">
      <div class="col">
        <img class="award-1" src="../assets/img/award-a.png" alt="" />
        <p class="text-xs text-center">
          Winner Seo Master MAGT Smart Start Award 2017
        </p>
      </div>
      <div class="col">
        <img class="award-2" src="../assets/img/award-b.png" alt="" />
        <p class="text-xs text-center">
          Top Social Media Agencies Next Partner 2018
        </p>
      </div>
      <div class="col">
        <img class="award-3" src="../assets/img/award-c.png" alt="" />
        <p class="text-xs text-center">
          10 Fastest Growing Abstract Solution Providers 2019
        </p>
      </div>
      <div class="col">
        <img class="award-4" src="../assets/img/award-d.png" alt="" />
        <p class="text-xs text-center">
          National Excellence Agencie Award Winner 2020
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Awards",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.container {
  padding-bottom: $container-padding;
  .col {
    padding: 70px 25px 20px;
    .award-1 {
      filter: hue-rotate(170deg);
    }
    .award-3 {
      filter: hue-rotate(-25deg);
    }
    .award-4 {
      filter: hue-rotate(199deg);
    }
  }
}
</style>
