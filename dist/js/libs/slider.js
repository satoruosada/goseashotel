"use strict";

jQuery(".hero__images").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  dots: false,
  arrows: true,
  fade: true
});
$(document).on('ready', function () {
  $(".full-screen").slick({
    centerMode: true,
    centerPadding: '5%',
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true
  });
});
//# sourceMappingURL=slider.js.map
