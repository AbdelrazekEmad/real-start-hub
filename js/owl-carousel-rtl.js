$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  rtl: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});
