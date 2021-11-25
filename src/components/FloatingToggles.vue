<template>
  <div class="floating-toggles">
    <a class="a demos" href="#" v-if="!isChatOpened">
      <div>
        <img
          class="demos-icon before"
          src="../assets/img/demos-icon.svg"
          alt=""
        />
        <img
          class="demos-icon after"
          src="../assets/img/demos-icon.svg"
          alt=""
        />
      </div>
      <p class="text-xxxs">Demos</p>
    </a>
    <a class="a on-sale" href="#" v-if="!isChatOpened">
      <div>
        <div class="price before"><span class="dollar-sign">$</span>39</div>
        <div class="demos-icon after">
          <FontAwesomeIcon icon="shopping-cart" />
        </div>
      </div>
      <p class="text-xxxs">On Sale</p>
    </a>
    <ChatToggle
      class="chat-toggle"
      @chat-toggled="isChatOpened = !isChatOpened"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ChatToggle from "./ChatToggle.vue";

export default {
  name: "FloatingToggles",
  components: {
    FontAwesomeIcon,
    ChatToggle,
  },
  data() {
    return {
      isChatOpened: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.floating-toggles {
  position: fixed;
  z-index: 100;
  top: 150px;
  right: 1rem;
  height: calc(100vh - 180px);
  width: auto;
  @include flex(column, 0);

  .demos,
  .on-sale {
    position: relative;
    width: 68px;
    height: 68px;
    padding: 2.7rem 0 0;
    text-align: center;
    background-color: $clr-light;
    border-radius: $border-radius-small;
    cursor: pointer;
    overflow: hidden;
    font-weight: bold;
    box-shadow: 0 -5px 20px 5px rgb(0 0 0 / 15%);
    &:hover {
      .before {
        transform: translate(-250%, -50%);
      }
      .after {
        transform: translate(-50%, -50%);
      }
    }
    .price,
    .demos-icon {
      height: 30px;
      width: 30px;
      transition: transform 0.1s;
      color: hsl(210, 28%, 28%);
      font-size: 1.5rem;
    }
    .before {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .after {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(150%, -50%);
    }
  }
  .demos {
    z-index: 1;
  }
  .on-sale {
    margin-top: 0.3rem;
    .price {
      @include flex(row, 0, flex-start);
      left: 45%;
      color: $clr-success;
      .dollar-sign {
        font-size: 1rem;
        padding-bottom: 0.5rem;
      }
    }
  }
  .chat-toggle {
    margin-top: auto;
  }
}
</style>
