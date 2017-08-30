(function ($) {
  'use strict';
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {

      var controller = new ScrollMagic.Controller();

      var blocks = [".parallax--parallax1", ".parallax--parallax2"];

      blocks.forEach(function (block, index) {

        var $bg = $(block).find('.parallax__bg');
        var $content = $(block).find('.parallax__content');

        var tl = new TimelineMax();
        tl
            .from($bg, 2, {y: '-40%', ease: Power0.easeNone}, 0)
            .from($content, 1, {autoAlpha: 0, ease: Power0.easeNone}, 0.4)
        ;

        var scene = new ScrollMagic.Scene({
          triggerElement: block,
          triggerHook: 1,
          duration: "100%"
        })
            .setTween(tl)
            .addTo(controller);
      });
    }
  }
}(jQuery));