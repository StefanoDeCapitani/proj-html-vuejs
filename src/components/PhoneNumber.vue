<template>
  <span>
    <span class="phone-icon">
      <FontAwesomeIcon icon="phone-alt" />
    </span>
    <slot> </slot>
  </span>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PhoneNumber",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.phone-icon {
  color: $clr-primary;
  padding: 0 0.5rem;
}
</style>
