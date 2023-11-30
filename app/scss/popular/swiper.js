const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  //   autoplay: {
  //     delay: 5000,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".custom_prev",
    prevEl: ".custom_next",
  },
});
