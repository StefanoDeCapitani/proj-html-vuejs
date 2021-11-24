<template>
  <div class="container">
    <div class="row row-cols-2 main-section">
      <div class="col row">
        <div class="col-5_6">
          <section class="section section-l">
            <h2>
              We Boost Our <br />
              Clients’ Bottom Line <br />
              by Optimizing Their <br />
              Growth Potential.
            </h2>
            <p>
              Quisque aliquet, libero consequat elementum convallis, erat risus
              imperdiet pellentesque sem neque eget.
            </p>
            <a href="#" class="a btn--primary">Why Work With Us</a>
          </section>
        </div>
      </div>
      <div class="col section-image">
        <img src="../assets/img/we-boost-our-clients.jpg" alt="" />
      </div>
    </div>
    <div class="row-cols-2">
      <div class="col row">
        <div class="col-5_6 client-relationship">
          <div class="section-m">
            <h3>We Build Relationship</h3>
            <p>
              Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
              maximus nec ut leo. Integer consectetur.
            </p>
          </div>
          <div class="section-m">
            <h3>Proprietary Processes</h3>
            <p>
              Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
              maximus nec ut leo. Integer consectetur.
            </p>
          </div>
        </div>
      </div>
      <div class="col row">
        <div class="col-5_6 features-container">
          <div class="feature" v-for="(feature, i) in features" :key="i">
            <a class="a icon-container" href="feature.href">
              <FontAwesomeIcon :icon="feature.icon" />
            </a>
            <div class="section section-s">
              <h4>
                <a class="a" href="feature.href">{{ feature.title }}</a>
              </h4>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ClientRelationship",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      features: [
        {
          icon: "search-plus",
          title: "Accountability",
          description: "Curabitur ac leo nunc vestibulum",
          href: "#",
        },
        {
          icon: "plus-square",
          title: "Transparency",
          description: "Curabitur ac leo nunc vestibulum",
          href: "#",
        },
        {
          icon: "poll",
          title: "Investment",
          description: "Curabitur ac leo nunc vestibulum",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container {
  padding-top: $container-padding-big;
  padding-bottom: $container-padding-big;

  .row {
    &.main-section {
      padding-bottom: $container-padding;
    }
    .section {
      @include flex(column, 38px);
    }
    .section-image > img {
      border-radius: $border-radius-small;
    }
    .client-relationship {
      @include flex(column, 80px);
      align-self: flex-start;
    }
    .features-container {
      display: grid;
      gap: 58px;
      .feature {
        @include flex(row, 1.5rem, center);
        padding-left: 52px;
        .icon-container {
          color: $clr-primary;
          width: 80px;
          height: 80px;
          border-radius: $border-radius;
          display: grid;
          place-content: center;
          font-size: 2.5rem;
          border: 3px solid $clr-primary;
        }
        .section {
          display: grid;
          gap: 1rem;
        }
      }
    }
  }
}
</style>
