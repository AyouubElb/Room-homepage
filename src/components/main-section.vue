<template>
  <div
    class="main-container grid-col-span-6"
    :style="{
      backgroundImage: `url(${require('@/assets/images/' + image)})`,
    }"
  >
    <top-navigation-bar />
  </div>
</template>
<script>
import { useDataStore } from "@/stores/DataStores";
import topNavigationBar from "./top-navigation-bar.vue";
export default {
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  components: {
    topNavigationBar,
  },
  data() {
    return {};
  },
  computed: {
    image() {
      if (window.innerWidth > 600) {
        return this.dataStore.currentData.mainDeskImg;
      } else {
        return this.dataStore.currentData.mainMobImg;
      }
    },
  },
};
</script>
<style>
.main-container {
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 3rem;
  padding-inline: 3rem;
  padding-bottom: 28rem;
}

@media only screen and (max-width: 600px) {
  .main-container {
    padding-bottom: 18.5rem;
  }
}
</style>
