<template>
  <div class="desc-section-container grid-col-span-4">
    <div class="nav-icons-mobile nav-icons">
      <div class="icon-angle-left" @click="dataStore.previousData()">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div class="icon-angle-right" @click="dataStore.nextData()">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="desc-section-content">
      <h1 class="desc-section-title">
        {{ currentContent.descTitle }}
      </h1>
      <p class="desc-section-text">
        {{ currentContent.descText }}
      </p>
      <div class="shop-now-btn">
        <p>Shop now</p>
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
    </div>
    <div class="nav-icons">
      <div class="icon-angle-left" @click="dataStore.previousData()">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div class="icon-angle-right" @click="dataStore.nextData()">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDataStore } from "@/stores/DataStore";

const dataStore = useDataStore();

const currentContent = computed(() => {
  return dataStore.currentData;
});
</script>

<style>
.desc-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desc-section-content {
  width: 70%;
  margin-top: auto;
}

.desc-section-title {
  font-size: 3rem;
  letter-spacing: -1.5px;
  font-weight: 600;
  color: var(--black-clr);
  margin-bottom: 1.5rem;
}

.desc-section-text {
  color: var(--dark-gray-clr);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.shop-now-btn {
  font-weight: 700;
  display: flex;
  color: var(--black-clr);
  fill: var(--black-clr);
}

.shop-now-btn:hover {
  color: var(--dark-gray-clr);
  fill: var(--dark-gray-clr);
}

.shop-now-btn p {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  cursor: pointer;
  margin-right: 1rem;
}

.shop-now-btn svg {
  cursor: pointer;
}

.nav-icons {
  margin-top: auto;
  margin-right: auto;
  display: flex;
}

.nav-icons > * {
  background-color: var(--black-clr);
  padding: 1rem 1.5rem;
  cursor: pointer;
}

.nav-icons > *:hover {
  background-color: var(--v-dark-gray-clr);
}

.nav-icons-mobile {
  margin-left: auto;
  margin-right: 0;
  margin-top: -56px;
  display: none;
}

@media only screen and (max-width: 600px) {
  .desc-section-content {
    width: 85%;
    margin: 4rem 0;
  }
  .nav-icons {
    display: none;
  }
  .nav-icons-mobile {
    display: flex;
    z-index: 1;
  }
}
</style>
