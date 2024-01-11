<template>
  <div class="desc-section-container">
    <div class="desc-section-content">
      <h1 class="desc-section-title">Discover innovative ways to decorate</h1>
      <p class="desc-section-text">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
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
  </div>
</template>
<script>
export default {};
</script>
<style>
.desc-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.desc-section-content {
  width: 67%;
}

.desc-section-title {
  font-size: 2.25rem;
  letter-spacing: -1.5px;
  font-weight: 600;
  color: var(--black-clr);
  margin-bottom: 1.5rem;
}

.desc-section-text {
  color: var(--dark-gray-clr);
  line-height: 1.25;
  margin-bottom: 1.5rem;
}

.shop-now-btn {
  display: flex;
  color: var(--black-clr);
  fill: var(--black-clr);
}

.shop-now-btn:hover {
  color: var(--dark-gray-clr);
  fill: var(--dark-gray-clr);
}

.shop-now-btn p {
  text-transform: uppercase;
  letter-spacing: 10px;
  cursor: pointer;
  margin-right: 1rem;
}

.shop-now-btn svg {
  cursor: pointer;
}
</style>
