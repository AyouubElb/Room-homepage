import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => {
    return {
      websiteData: [
        {
          mainDeskImg: "desktop-image-hero-1.jpg",
          mainMobImg: "mobile-image-hero-1.jpg",
          descTitle: "Discover innovative ways to decorate",
          descText:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        },
        {
          mainDeskImg: "desktop-image-hero-2.jpg",
          mainMobImg: "mobile-image-hero-2.jpg",
          descTitle: "We are available all across the globe",
          descText:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },
        {
          mainDeskImg: "desktop-image-hero-3.jpg",
          mainMobImg: "mobile-image-hero-3.jpg",
          descTitle: "Manufactured with the best materials",
          descText:
            "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
        },
      ],
      index: 0,
      mobileNav: false,
    };
  },
  getters: {
    currentData() {
      return this.websiteData[this.index];
    },
  },
  actions: {
    nextData() {
      if (this.index < this.websiteData.length - 1) {
        this.index++;
      }
    },
    previousData() {
      if (this.index > 0) {
        this.index--;
      }
    },
    openMobileNav() {
      this.mobileNav = true;
    },
    closeMobileNav() {
      this.mobileNav = false;
    },
  },
});
