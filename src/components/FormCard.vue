<template>
  <div class="card">
    <img
      class="card__profile-image"
      src="../assets/img/marketing-consultant-expert.jpg"
      alt="Richard Madsen profile image"
    />
    <p class="card__name text-m">Richard Madsen</p>
    <p class="card__professional-title text-xs">Marketing consultant expert</p>
    <a class="a btn--call" href="tel:5558021234">
      <PhoneNumber>(555) 802-1234</PhoneNumber>
    </a>
    <form class="form" @submit.prevent="onSubmit($event)">
      <div class="form__input-container form__input-container--name">
        <input
          type="text"
          placeholder="Your Name*"
          class="form__input form__input--name text-s"
          required
        />
      </div>
      <div class="form__input-container">
        <input
          type="email"
          placeholder="Your Email*"
          class="form__input text-s"
          required
        />
      </div>
      <div class="form__input-container">
        <input
          type="tel"
          placeholder="Your Phone Number*"
          class="form__input text-s"
          required
        />
      </div>
      <button class="btn btn--primary btn--call-to-action">
        Get a Callback
      </button>
      <p class="form__disclaimer text-xxxs">
        By submitting my data I agree to be contacted
      </p>
    </form>
  </div>
</template>

<script>
import PhoneNumber from "./PhoneNumber.vue";
export default {
  name: "FormCard",
  components: {
    PhoneNumber,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    onSubmit(event) {
      this.name = event.target.elements[0].value;
      this.email = event.target.elements[1].value;
      this.phone = event.target.elements[2].value;
      event.target.elements[0].value = "";
      event.target.elements[1].value = "";
      event.target.elements[2].value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.card {
  @include flex(column, 17px, center);
  background-color: white;
  color: grey;
  margin: auto;
  padding: 2rem;
  width: calc(100% / 6 * 4.8);
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  .card__profile-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .card__name {
    color: $text-dark;
    padding-bottom: 10px;
  }
  .btn--call {
    color: $clr-primary;
    margin-bottom: 1rem;
  }
  .form {
    @include flex(column, 1rem, center);
    width: 100%;
    .form__input-container {
      width: 100%;
      position: relative;

      &.form__input-container--name {
        &::after {
          content: "";
          background-image: url(../assets/img/image.png);
          background-size: contain;
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1.2rem;
        }
        .form__input {
          padding-right: 2.4rem;
        }
      }
      .form__input {
        height: 58px;
        width: 100%;
        color: inherit;
        border: none;
        box-shadow: 0 0 0 1px $clr-secondary-light inset;
        background: white;
        border-radius: $border-radius-small;
        transition: $transition;
        padding: 0.5rem 1rem;
        &:focus {
          outline: none;
          box-shadow: 0 0 0 1px $clr-primary inset;
        }
      }
    }

    .btn--call-to-action {
      width: 100%;
    }
  }
}
</style>
