<template>
  <div
    class="main-container grid-col-span-6"
    :style="{
      backgroundImage: `url(${require('@/assets/images/' + image)})`,
    }"
    ref="mainSectionRef"
  >
    <top-navigation-bar v-if="!dataStore.mobileNav" />
    <mobileNavbar v-if="dataStore.mobileNav" />
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useDataStore } from "@/stores/DataStore";
import topNavigationBar from "./top-navigation-bar.vue";
import mobileNavbar from "./mobileNavbar.vue";

defineProps({
  pageOffsetWidth: Number,
  default: 0,
});
const dataStore = useDataStore();

const innerWidth = ref(window.innerWidth);

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
    position: relative;
  }
}
</style>
