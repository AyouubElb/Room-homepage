<template>
  <div class="main-container">
    <top-navigation-bar />
  </div>
</template>
<script>
import topNavigationBar from "./top-navigation-bar.vue";
export default {
  components: {
    topNavigationBar,
  },
};
</script>
<style>
.main-container {
  background-image: url("../assets/images/desktop-image-hero-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 24rem;
}
</style>
