<template>
  <div id="app" @scroll.passive="manageStickyOrFixedItems($event)">
    <Header :show-header="classShowHeader"></Header>
    <Main :sticky-call-card="classStickyCallCard"></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      lastscrollvalue: 0,
      classShowHeader: "show",
      classStickyCallCard: "",
      callCardPosition: 0,
    };
  },
  methods: {
    manageStickyOrFixedItems(event) {
      let heroThreshold =
        event.target.querySelector(".hero + .container").offsetTop;

      if (
        event.target.scrollTop > this.lastscrollvalue &&
        event.target.scrollTop < heroThreshold
      ) {
        this.lastscrollvalue = event.target.scrollTop;
        this.callCardPosition =
          event.target.querySelector(".call-card").offsetTop;

        this.classShowHeader = "show";
        this.classStickyCallCard = "";
      } else if (event.target.scrollTop < this.lastscrollvalue) {
        this.classShowHeader = "show";
        this.lastscrollvalue = event.target.scrollTop;

        if (event.target.scrollTop < this.callCardPosition) {
          this.classStickyCallCard = "";
        } else {
          this.classStickyCallCard = "sticky go-up";
        }
      } else {
        this.classShowHeader = "";
        this.lastscrollvalue = event.target.scrollTop;

        if (event.target.scrollTop > this.callCardPosition) {
          this.classStickyCallCard = "sticky";
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app";

#app {
  height: 100vh;
  overflow: auto;
}
</style>
