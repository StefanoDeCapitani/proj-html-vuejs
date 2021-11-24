<template>
  <div
    class="nav__link"
    @mouseleave="showDropDown = false"
    @mouseenter="showDropDown = true"
  >
    <a class="a" :href="linkHref">
      <div class="title">
        <slot></slot>
        <span class="drop-down-arrow" v-if="dropDownMenu"
          ><FontAwesomeIcon :icon="['fas', 'chevron-down']"
        /></span>
      </div>
    </a>
    <div
      v-if="dropDownMenu && showDropDown === true"
      class="drop-down-menu"
      :style="dropDownWidth"
      ref="dropDown"
    >
      <ul class="ul">
        <li class="li" v-for="(link, i) in dropDownMenu" :key="i">
          <div
            v-if="link.icon"
            :class="link.icon.class"
            class="drop-down__link-icon"
          >
            <FontAwesomeIcon :icon="link.icon.name" />
          </div>
          <a href="#" class="a drop-down__title text-s">
            <h4>{{ link.title }}</h4>
          </a>
          <p v-if="link.description" class="text-xs drop-down__description">
            {{ link.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "NavLink",
  components: {
    FontAwesomeIcon,
  },
  props: {
    dropDownMenu: { type: Array, default: null },
    linkHref: String,
  },
  data() {
    return {
      showDropDown: false,
      dropDownWidth: "width: auto",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.nav__link {
  position: relative;
  .a {
    transition: $transition;
    font-weight: bold;
    font-size: $fs-xs;
    padding: 1.3rem 0;
    cursor: pointer;
    .drop-down-arrow {
      padding-left: 0.4rem;
      font-size: 0.7rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: 10px;
    bottom: 10px;
    border-bottom: 2px solid $clr-primary;
    transform: scale(0);
    opacity: 0;
    transition: $transition;
    z-index: -1;
  }
  &.active,
  &:hover {
    .title {
      color: $clr-primary;
    }
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }
  .drop-down-menu {
    position: absolute;
    border-radius: $border-radius;
    /*     top: 90px; */
    left: -5px;
    padding: 0.5rem 2rem;
    background-color: $clr-light;
    /*     opacity: 0; */
    transition: $transition;
    box-shadow: 0px 10px 30px -8px rgb(0 0 0 / 20%);
    animation: showUp 0.3s linear;
    @keyframes showUp {
      0% {
        top: 90px;
        opacity: 0;
      }
      100% {
        top: 65px;
        opacity: 1;
      }
    }
    .ul {
      @include flex(row, 1rem, flex-start);
      width: 100%;
      .drop-down__link-icon {
        margin: 1.3rem 0 0.5rem;
        width: 40px;
        height: 40px;
        display: grid;
        place-content: center;
        border-radius: 50%;
        font-size: $fs-m;
        &.bg-info--light {
          color: $clr-info;
        }
        &.bg-warning--light {
          color: $clr-warning;
        }
        &.bg-success--light {
          color: $clr-success;
        }
      }

      .li {
        width: 230px;
      }
      .drop-down__title {
        cursor: pointer;
        white-space: nowrap;
        padding: 0.8rem 0;
        &:hover {
          color: $clr-primary;
        }
      }
      .drop-down__description {
        padding-bottom: 2rem;
      }
    }
  }
}
</style>
