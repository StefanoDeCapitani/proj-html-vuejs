<template>
  <a class="a" href="#">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "NavLink",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/utilities";

.a {
  position: relative;
  transition: $transition;
  font-weight: bold;
  font-size: $fs-xs;
  &::after {
    content: "";
    position: absolute;
    inset: -5px;
    border-bottom: 3px solid $clr-primary;
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
</style>
