<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(["getAddress", "getUserInfo"])
  },
  mounted() {
    this.getAddress();
    this.getUserInfo();
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
