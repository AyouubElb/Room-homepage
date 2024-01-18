<template>
  <div class="home" ref="pageRef">
    <main-section :pageOffsetWidth="pageOffsetWidth.value" />
    <description-section />
    <productDisplay-left />
    <about-section />
    <productDisplay-right />
  </div>
</template>
<script setup>
import AboutSection from "../components/about-section.vue";
import DescriptionSection from "../components/description-section.vue";
import MainSection from "../components/main-section.vue";
import ProductDisplayLeft from "../components/productDisplay-left";
import ProductDisplayRight from "../components/productDisplay-right.vue";
import { ref, onMounted } from "vue";

const pageRef = ref(null);
const pageOffsetWidth = ref(0);

onMounted(() => {
  if (pageRef.value) {
    pageOffsetWidth.value = pageRef.value.offsetWidth;
  }
  console.log("pageOffsetWidth", pageOffsetWidth.value);
});
</script>

<style>
:root {
  --dark-gray-clr: hsl(0, 0%, 63%);
  --v-dark-gray-clr: hsl(0, 0%, 27%);
  --black-clr: hsl(0, 0%, 0%);
  --white-clr: hsl(0, 0%, 100%);

  --ff: "League Spartan", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}

ul,
ol {
  list-style: none;
}

.home {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  font-family: var(--ff);
  font-size: 1rem;
}

.grid-col-span-3 {
  grid-column: span 3;
}

.grid-col-span-4 {
  grid-column: span 4;
}

.grid-col-span-6 {
  grid-column: span 6;
}

@media only screen and (max-width: 600px) {
  .home {
    display: flex;
    flex-direction: column;
  }
}
</style>
