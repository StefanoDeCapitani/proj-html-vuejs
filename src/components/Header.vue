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
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
            <NavLink>Home</NavLink>
          </li>
          <li class="li nav__li">
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
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  padding: 1.64rem 1.41rem 1.41rem;
  .nav__logo {
    margin-right: auto;
  }
  .nav__ul {
    display: flex;
    gap: 2rem;
    & > * {
      padding: 0 0.5rem;
    }
  }
  .nav__call-to-action {
    margin-left: 2rem;
  }
}
</style>
