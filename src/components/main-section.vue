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
<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "@/stores/DataStores";
import topNavigationBar from "./top-navigation-bar.vue";

const dataStore = useDataStore();

const image = computed(() => {
  if (window.innerWidth > 600) {
    return dataStore.currentData.mainDeskImg;
  } else {
    return dataStore.currentData.mainMobImg;
  }
});
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
    padding-inline: 1.5rem;
    padding-bottom: 18.5rem;
  }
}
</style>
