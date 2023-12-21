/**
 * @author pxdraft
 * @version 1.0
 *
 */
(function ($) {
  "use strict";
  var MOMB = {};
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*--------------------
  * Owl Corousel
  ----------------------*/
  MOMB.Owl = function () {
    var owlslider = $("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = $this.data("items") ? $this.data("items") : 1,
          $loop = $this.attr("data-loop") ? $this.data("loop") : true,
          $navdots = $this.data("nav-dots") ? $this.data("nav-dots") : false,
          $navarrow = $this.data("nav-arrow") ? $this.data("nav-arrow") : false,
          $autoplay = $this.attr("data-autoplay")
            ? $this.data("autoplay")
            : false,
          $autospeed = $this.attr("data-autospeed")
            ? $this.data("autospeed")
            : 5000,
          $smartspeed = $this.attr("data-smartspeed")
            ? $this.data("smartspeed")
            : 1000,
          $autohgt = $this.data("autoheight")
            ? $this.data("autoheight")
            : false,
          $CenterSlider = $this.data("center") ? $this.data("center") : false,
          $stage = $this.attr("data-stage") ? $this.data("stage") : 0,
          $space = $this.attr("data-space") ? $this.data("space") : 30;

        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data("xs-items") ? $this.data("xs-items") : 1,
            },
            576: {
              items: $this.data("sm-items") ? $this.data("sm-items") : 1,
            },
            768: {
              items: $this.data("md-items") ? $this.data("md-items") : 1,
            },
            992: {
              items: $this.data("lg-items") ? $this.data("lg-items") : 1,
            },
            1200: {
              items: $items,
            },
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          center: $CenterSlider,
          margin: $space,
          stagePadding: $stage,
          nav: $navarrow,
          navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>",
          ],
          autoplay: $autoplay,
          autoplayHoverPause: true,
        });
      });
    }
  };

  // Document on Ready
  $(document).ready(function () {
    MOMB.Owl();
  });
})(jQuery);
