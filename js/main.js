$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 50,
    loop: true,
    nav: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i> `,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    autoplay: true,
    autoplayTimeout:3000,
  });
});
