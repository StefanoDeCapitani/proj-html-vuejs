<template>
  <div class="live-chat">
    <div class="live-chat__profile">
      <img :src="require('../' + requiredSrc)" alt="" class="profile-image" />
      <p class="text-m">Avada Marketing Consultant</p>
    </div>
    <div class="live-chat__chat" ref="chat">
      <Message
        v-for="(message, i) in messages"
        :key="i"
        :srcImg="requiredSrc"
        :status="message.status"
      >
        {{ message.text }}
      </Message>
    </div>
    <div class="live-chat__input-section">
      <input
        type="text"
        v-model="inputMessage"
        placeholder="Write a message"
        class="live-chat__input text-s"
        @keyup.enter="sendMessage"
      />
      <div
        class="live-chat__send-message"
        :class="{ enabled: isSendButtonEnabled }"
        @click="sendMessage"
      >
        <FontAwesomeIcon icon="paper-plane" />
      </div>
    </div>
    <p class="text-xxxs more-info">
      <FontAwesomeIcon class="icon" :icon="['fab', 'hubspot']" /> Add free
      <a href="#" class="a">live chat</a> to your site
    </p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Message from "./Message.vue";

export default {
  name: "LiveChat",
  components: {
    FontAwesomeIcon,
    Message,
  },
  props: {
    srcImg: String,
  },
  data() {
    return {
      inputMessage: "",
      fakeReply: {
        status: "received",
        text: "Ti contatteremo al più presto per rispondere a tutte le tue domande.",
      },
      messages: [
        {
          status: "received",
          text: "This is a free HubSpot live chat. You can create your own chat flows and engage your customers with Avada & HubSpot!",
        },
      ],
    };
  },
  computed: {
    requiredSrc: function () {
      return this.srcImg.replace("../", "");
    },
    isSendButtonEnabled: function () {
      return this.inputMessage !== "";
    },
  },
  methods: {
    sendMessage() {
      this.messages.push({
        status: "sent",
        text: this.inputMessage,
      });
      this.inputMessage = "";
      setTimeout(this.receiveFakeReply, 1000);
      setTimeout(this.scrollToBottom, 10);
    },
    receiveFakeReply() {
      this.messages.push(this.fakeReply);
      setTimeout(this.scrollToBottom, 10);
    },
    scrollToBottom() {
      this.$refs.chat.scrollTop =
        this.$refs.chat.scrollHeight - this.$refs.chat.clientHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.live-chat {
  position: absolute;
  width: 400px;
  height: 68vh;
  max-height: 600px;
  right: 0px;
  bottom: 100px;
  border-radius: $border-radius;
  background-color: $clr-light;
  color: $clr-dark;
  line-height: 1.5rem;
  overflow: hidden;
  @include flex(column, 0);
  box-shadow: 0 -5px 20px 5px rgb(0 0 0 / 15%);
  .live-chat__profile {
    background-color: $clr-primary;
    @include flex(row, 1.5rem, center);
    padding: 1rem 1.5rem;
    color: $clr-light;
    flex: 0 0 auto;
    width: 100%;
    .profile-image {
      border: 3px solid $clr-light;
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
  }
  .live-chat__chat {
    flex: 1 1 auto;
    max-height: 100%;
    padding: 1rem 1.5rem;
    overflow: auto;
  }
  .live-chat__input-section {
    flex: 0 0 auto;
    border-top: 1px solid $clr-secondary-light;
    padding: 0.5rem 1rem 0;
    width: 100%;
    @include flex(row, 0, center);
    .live-chat__input {
      flex: 1 1 auto;
      border: none;
      height: 35px;
      padding: 0 0.5rem;
      &:focus {
        outline: none;
      }
    }
    .live-chat__send-message {
      font-size: 1.3rem;
      padding: 1rem;
      cursor: not-allowed;
      &.enabled {
        border-radius: 50%;
        color: $clr-primary;
        background-color: $clr-primary-light;
        cursor: pointer;
      }
    }
  }
  .more-info {
    width: 100%;
    text-align: center;
    cursor: default;
    padding-bottom: 0.5rem;
    color: $clr-secondary;
    .icon,
    .a {
      color: $clr-primary;
    }
    .a {
      cursor: pointer;
    }
  }
}
</style>
