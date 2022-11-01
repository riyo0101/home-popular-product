(function ($) {
  "use strict";

  $(".owl-collection").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
})(window.jQuery);
