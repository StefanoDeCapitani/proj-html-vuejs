<template>
  <div class="message" :class="status">
    <img
      :src="require('../' + srcImg)"
      alt=""
      v-if="status === 'received'"
      class="message__profile-image"
    />
    <div class="text-xxs message__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    status: String,
    srcImg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.message {
  .message__profile-image {
    border: 3px solid $clr-light;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .message__text {
    padding: 0.8rem;
    width: 80%;
  }
  &.received {
    .message__text {
      padding: 0.5rem;
      background-color: $clr-info-light;
      border-radius: $border-radius;
      border-top-left-radius: 0;
      position: relative;
      left: 40px;
      bottom: 10px;
    }
  }
  &.sent {
    .message__text {
      margin-top: 1rem;
      background-color: $clr-primary-light;
      border-radius: $border-radius;
      border-top-right-radius: 0;
      margin-left: auto;
    }
  }
}
</style>
