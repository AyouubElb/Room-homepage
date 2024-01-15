<template>
  <div class="mobileNavbar-menu">
    <div class="close-icon" @click="dataStore.closeMobileNav">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
          fill="#000"
          fill-rule="evenodd"
          opacity=".201"
        />
      </svg>
    </div>
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</template>
<script setup>
import { useDataStore } from "@/stores/DataStore";
const dataStore = useDataStore();
</script>
<style>
.mobileNavbar-menu {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white-clr);
  padding: 2rem 1rem;
  display: none;
}

.close-icon {
  cursor: pointer;
}

.mobileNavbar-menu ul {
  display: flex;
  gap: 2rem;
  text-transform: lowercase;
  margin-left: auto;
}

.mobileNavbar-menu li {
  color: var(--black-clr);
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  display: block;
}
</style>
