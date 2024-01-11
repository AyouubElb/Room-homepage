<template>
  <div class="home">
    <main-section />
    <description-section />
    <productDisplay-left />
    <about-section />
    <productDisplay-right />
  </div>
</template>
<script>
import AboutSection from "../components/about-section.vue";
import DescriptionSection from "../components/description-section.vue";
import MainSection from "../components/main-section.vue";
import ProductDisplayLeft from "../components/productDisplay-left";
import ProductDisplayRight from "../components/productDisplay-right.vue";

export default {
  components: {
    MainSection,
    AboutSection,
    DescriptionSection,
    ProductDisplayLeft,
    ProductDisplayRight,
  },
};
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
  grid-template-columns: 1.5fr 0.75fr;
  font-family: var(--ff);
  font-size: 12px;
}
</style>
