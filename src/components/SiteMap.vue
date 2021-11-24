<template>
  <div class="site-map">
    <ul class="ul" v-for="(category, i) in siteMap" :key="i">
      <li class="li">
        <h4 class="text-xs">{{ category.title }}</h4>
      </li>
      <li
        class="li site-map__link"
        v-for="(link, j) in category.links"
        :key="j"
      >
        <a :href="link.href" class="a text-xxs">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SiteMap",
  data() {
    return {
      siteMap: [
        {
          title: "Services",
          links: [
            {
              text: "Marketing Plan",
              href: "#",
            },
            {
              text: "Sales Development",
              href: "#",
            },
            {
              text: "Digital Marketing",
              href: "#",
            },
            {
              text: "Pricing",
              href: "#",
            },
            {
              text: "Why Us",
              href: "#",
            },
            {
              text: "Case Studies",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              text: "Learning Center",
              href: "#",
            },
            {
              text: "Video Tutorials",
              href: "#",
            },
            {
              text: "Costumers",
              href: "#",
            },
            {
              text: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              text: "Who We Are",
              href: "#",
            },
            {
              text: "Contact Us",
              href: "#",
            },
            {
              text: "Careers",
              href: "#",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.site-map {
  @include flex(row, 0, flex-start, space-evenly);

  ul {
    @include flex(column, 17px);
    width: 100%;
    flex: 0 1 180px;
    .site-map__link {
      position: relative;
      transition: $transition;
      cursor: pointer;
      width: 100%;
      &::after {
        content: "";
        position: absolute;
        inset: -5px;
        border-right: 2px solid $clr-primary;
        transform: scale(0);
        opacity: 0;
        transition: $transition;
      }
      &.active,
      &:hover {
        color: $clr-primary;
        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
}
</style>
