<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <img
          class="nav__logo"
          src="@/assets/img/avada-marketing-logo.png"
          alt="Avada Marketing logo"
        />
        <ul class="nav__ul">
          <li class="li nav__li" v-for="(link, i) in navLinks" :key="i">
            <NavLink
              :class="{ active: isActive(i) }"
              :dropDownMenu="link.dropDownMenu"
              :linkHref="link.href"
              >{{ link.title }}</NavLink
            >
          </li>
          <li class="li nav__li phone-number">
            <PhoneNumber>(555) 802-1234</PhoneNumber>
          </li>
        </ul>
        <button class="btn btn--primary-light nav__call-to-action">
          Free Quote
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import NavLink from "./NavLink.vue";
import PhoneNumber from "./PhoneNumber.vue";

export default {
  name: "Header",
  components: {
    NavLink,
    PhoneNumber,
  },
  data() {
    return {
      navLinks: [
        {
          title: "Home",
          dropDownMenu: [{ title: "Home Alternate" }],
          href: "#",
        },
        {
          title: "Services",
          dropDownMenu: [
            {
              icon: { name: ["far", "lightbulb"], class: "bg-info--light" },
              title: "Strategic Marketing Plan",
              description:
                "Maecenas ut erat malesuada tortor mattis scelerisque eu ut tortor",
            },
            {
              icon: {
                name: ["fas", "parachute-box"],
                class: "bg-warning--light",
              },
              title: "Sales Development",
              description:
                "Maecenas ut erat malesuada tortor mattis scelerisque eu ut tortor",
            },
            {
              icon: { name: ["fas", "seedling"], class: "bg-success--light" },
              title: "Digital Marketing",
              description:
                "Maecenas ut erat malesuada tortor mattis scelerisque eu ut tortor",
            },
          ],
          href: "#",
        },
        { title: "Why Us", href: "#" },
        { title: "Case Studies", href: "#" },
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
      ],
      activeLink: 0,
    };
  },
  methods: {
    isActive(i) {
      return i === this.activeLink;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.header {
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background: $clr-light;
  .nav {
    @include flex(row, 0, center, space-between);
    padding: 1.64rem 1.41rem 1.41rem;
    .nav__logo {
      margin-right: 1rem;
    }
    .nav__ul {
      display: flex;
      .nav__li {
        padding: 0 0.7rem;
      }
      .phone-number {
        padding: 1.3rem 2rem;
      }
    }
  }
}
</style>
