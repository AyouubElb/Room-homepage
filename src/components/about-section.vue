<template>
  <div class="about-section-container grid-col-span-4">
    <div class="about-section-content">
      <h4 class="about-section-title">About our furniture</h4>
      <p class="about-section-text">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style>
.about-section-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-section-content {
  width: 70%;
}

.about-section-title {
  color: var(--black-clr);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 1rem;
}

.about-section-text {
  color: var(--dark-gray-clr);
  line-height: 1.5;
}

@media only screen and (max-width: 600px) {
  .about-section-content {
    width: 85%;
    margin: 3rem 0;
  }
}
</style>
