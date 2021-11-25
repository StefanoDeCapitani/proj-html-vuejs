<template>
  <div>
    <LiveChat
      src-img="../assets/img/marketing-expert-cta.png"
      v-if="isChatToggleClicked"
    />
    <div class="message text-xxs" v-if="!messageClosed">
      <img
        class="profile-image"
        src="../assets/img/marketing-expert-cta.png"
        alt=""
      />
      <div class="close-button" @click="messageClosed = true">
        <FontAwesomeIcon icon="times" />
      </div>
      This is a free HubSpot live chat. You can create your own chat flow and
      engage your costumers with Avada &amp; HubSpot.
    </div>
    <div class="chat-toggle" @click="onToggleClick()">
      <FontAwesomeIcon icon="comments" v-if="!isChatToggleClicked" />
      <FontAwesomeIcon icon="times" v-if="isChatToggleClicked" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LiveChat from "./LiveChat.vue";
export default {
  name: "ChatToggle",
  components: {
    FontAwesomeIcon,
    LiveChat,
  },
  data() {
    return { isChatToggleClicked: false, messageClosed: false };
  },
  methods: {
    onToggleClick() {
      this.isChatToggleClicked = !this.isChatToggleClicked;
      this.$emit("chat-toggled");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.message {
  position: absolute;
  width: 240px;
  height: 170px;
  right: 0px;
  bottom: 82px;
  border-radius: $border-radius-small;
  background-color: $clr-light;
  color: $clr-dark;
  padding: 32px 21px 21px 14px;
  line-height: 1.5rem;
  .profile-image {
    position: absolute;
    top: -26px;
    left: 50%;
    transform: translateX(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.2rem;
    color: $clr-secondary;
    padding: 10px;
    cursor: pointer;
  }
}
.chat-toggle {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: $clr-primary;
  display: grid;
  place-content: center;
  color: $clr-light;
  font-size: 2.2rem;
  cursor: pointer;
}

.message,
.chat-toggle {
  box-shadow: 0 -5px 20px 5px rgb(0 0 0 / 15%);
}
</style>
