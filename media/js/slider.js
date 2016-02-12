'use strict';

// MAIN SLIDER-FLEXSLIDER
//==================================================================================
$(window).load(function () {
    $('#main-slider.flexslider').flexslider(
    {
        animation: "fade",
        controlNav: false,
        directionNav: true,
        slideshowSpeed: 5000,
        animationSpeed: 1000,
        pauseOnAction: true,
        animationLoop: true,
        pauseOnHover: true
    });
});