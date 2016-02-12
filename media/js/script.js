'use strict';

/*==============================
    - Template Name: Meaghan and Sam getting married
    - Author: socreydt.com
    - Version: 1.0
    - Website: www.socreydt.com
================================= */
/*----------------------
    Script Guide
------------------------
01. BROWSER AGENT FUNCTION
    01.1 Check CHROME (Mobile / Tablet)
    01.2 Check IOS
    01.3 Check FIREFOX
    01.4 Check IE (< IE10)
    01.5 Check IE11
    01.6 Check IE11 (Not Windows Phone)
    01.7 Check IE10
    01.8 Check IE9
    01.9 Check Safari/Chrome Mac

02. FULLSCREEN CLASS

03. HIDDEN ALL ANIMATION CLASS

04. PACE PRELOADER
    04.1 Gallery - Masonry
    04.2 Nav Header Position (Mobile / Tablet)
    04.3 Waypoint Sticky Navbar
        04.3.1 Top Bar
        04.3.2 Bottom Bar
    04.4 Waypoint Sticky Menu Icon (Sidebar Version)
    04.5 Waypoint Animate CSS
    04.6 Stellar Parallax

05. PRELOADER HEART ANIMATION (IE10 / 11)

06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)

07. COUNTDOWN

08. MOBILE MENU

09. DOUBLE TAP DROP DOWN MENU

10. OWL CAROUSEL
    10.1 OWL CAROUSEL - GIFT REGISTRY
    10.2 OWL CAROUSEL - MORE EVENTS (ONEPAGE)
    10.3 OWL CAROUSEL - REGISTRY LOGO (ONEPAGE)

11. RSVP
    11.1 Custom Checkbox
    11.2 Custom Radio

12. SMOOTH SCROLL

13. MAGNIFIC POPUP
    13.1 Magnific Zoom
    13.2 Magnific Zoom Gallery
    13.3 Magnific Ajax

14. DISALBE TRANSITION (Mobile / Tablet)

15. AUDIO
    15.1 Reset Mute Control (Chrome and Safari Mobile)
    15.2 On toggle mute button

16. VIDEO CONTROL
    16.1 Hide Video Control (Mobile / Tablet)
    16.2 Play Pause Video

17. OPTIONS SETTING

*/

$(document).ready(function () {
    // 01. BROWSER AGENT FUNCTION		
    //==================================================================================

    // 01.1 Check Chrome (Mobile / Tablet)
    //----------------------------------------------------------------------------------
    var isChromeMobile = function isChromeMobile() {
        if (device.tablet() || device.mobile()) {
            if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0) {
                return 1;
            }
        }
    }

    // 01.2 Check IOS
    //----------------------------------------------------------------------------------
    var isIOS = function isIOS() {
        if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0) {
            return 1;
        }
    }

    // 01.3 Check FIREFOX 
    //----------------------------------------------------------------------------------
    var is_firefox = function is_firefox() {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            return 1;
        }
    }

    // 01.4 Check IE (< IE10)
    //----------------------------------------------------------------------------------
    var isIE = function isIE() {
        if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
            return 1;
        }
    }

    // 01.5 Check IE11
    //----------------------------------------------------------------------------------
    var isIE11 = function isIE11() {
        if (!!navigator.userAgent.match(/Trident\/7\./)) {
            return 1;
        }
    }

    // 01.6 Check IE11 (Not Windows Phone)
    ///----------------------------------------------------------------------------------
    var isIE11desktop = function isIE11desktop() {
        if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
            return 1;
        }
    }

    // 01.7 Check IE10
    //----------------------------------------------------------------------------------
    var isIE10 = function isIE10() {
        if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
            return 1;
        }
    }

    // 01.8 Check IE9
    //----------------------------------------------------------------------------------
    var isIE9 = function isIE9() {
        if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
            return 1;
        }
    }

    // 01.9 Check Safari/Chrome Mac
    //----------------------------------------------------------------------------------
    var isSafari = function isSafari() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
            return 1;
        }
    }

    // 02. FULLSCREEN CLASS		
    //==================================================================================
    var fullscreen = function () {
        var fheight = $(window).height();
        $('.fullscreen').css("height", fheight);
    }

    //Execute on load
    fullscreen();

    //Execute on window resize
    $(window).resize(function () {
        fullscreen();
    });


    // 03. HIDDEN ALL ANIMATION CLASS
    //==================================================================================
    // Waypoint will animate it later (04.5 Waypoint Animate CSS)
    if (!device.tablet() && !device.mobile() && !isIE9()) {
        $('.animation').css({
            visibility: 'hidden'
        });
    }

    // 04. PACE PRELOADER
    //==================================================================================
    Pace.on('done', function () {
        $('#preloader').hide();
    });
    Pace.on('hide', function () {

        // 04.1 Waypoint Animate CSS
        //------------------------------------------------------------------------------
        if (!device.tablet() && !device.mobile() && !isIE9()) {
            $('.animation').each(function () {
                var _this = this;
                var animation_waypoint = new Waypoint({
                    element: _this,
                    handler: function (direction) {
                        $(this.element).css({ visibility: 'visible' });
                        $(this.element).addClass('animated');
                    },
                    offset: '90%'
                });
            });
        };


        // 04.2 Nav Header Position (Mobile)
        //------------------------------------------------------------------------------
        if (device.tablet() || device.mobile()) {
            if ($("#nav-bar").hasClass("sticky-nav")) {
                $("#nav-header").css("position", "relative");
            }
        }

        // 04.3 Waypoint Sticky Navbar
        //------------------------------------------------------------------------------		
        if ($("#nav-bar").hasClass("sticky-nav")) {

            // 04.3.1 Top Bar
            if ($("#nav-bar").hasClass("top-bar")) {

                var nav_header_waypoint = $('#nav-header').waypoint(function (direction) {

                    if (direction === 'down') {
                        if (!device.tablet() && !device.mobile()) {
                            $("#nav-bar").addClass("stick-it animated fadeInDownBig");
                        }
                        else {
                            $("#nav-bar").addClass("stick-it");
                        }
                    }
                    else {
                        $("#nav-bar").removeClass("stick-it animated fadeInDownBig");
                    }

                }, {
                    offset: '-100%'
                });
            }
        }
    });

    // 05. PRELOADER HEART ANIMATION (IE10 / 11)
    //==================================================================================	
    if (isIE10() || isIE11()) {
        $(".heart-animation").css("letter-spacing", "normal");
    }

    // 06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)
    //==================================================================================
    $('.photo-item').bind('touchstart touchend', function (e) {

    });

    // 07. COUNTDOWN
    //===================================================================================
    $('#countdown').countdown("2016/05/26 18:30:00").on('update.countdown', function (event) {
        var html = '<span class="countdown_row">';
        var need_seconds = false;
        if (event.offset.months > 0) {
            html += '<span class="countdown_section"><span class="countdown_amount">' + '%-m' + '</span><br>Months</span>';
        }
        if (event.offset.days > 0) {
            html += '<span class="countdown_section"><span class="countdown_amount">' + '%-d' + '</span><br>Days</span>';
        }
        if (event.offset.hours > 0) {
            html += '<span class="countdown_section"><span class="countdown_amount">' + '%-H' + '</span><br>Hours</span>';
        } else {
            need_seconds = true;
        }
        if (event.offset.minutes > 0) {
            html += '<span class="countdown_section"><span class="countdown_amount">' + '%-M' + '</span><br>Minutes</span>';
        } else {
            need_seconds = true;
        }
        if (need_seconds == true) {
            html += '<span class="countdown_section"><span class="countdown_amount">' + '%-S' + '</span><br>Seconds</span>';
        }


        html += '</span>'
        $(this).html(event.strftime(html));

    }).on('finish.countdown', function (event) {


    });

    // 10. OWL CAROUSEL
    //==================================================================================

    // 10.1 OWL CAROUSEL - SLEEP
    //------------------------------------------------------------------------------
    if ($(".owl-hotel").length) {
        $(".owl-hotel").owlCarousel({
            autoPlay: false,
            stopOnHover: true,
            autoHeight: false,
            pagination: true,
            singleItem: true,
            lazyLoad: true,
            navigation: false,
            itemsScaleUp: true
        });

        if (device.tablet() || device.mobile()) {
            var owl_gift = $(".owl-hotel").data('owlCarousel');
            owl_gift.stop()
        }
    }


    // 12. SMOOTH SCROLL
    //=========================================================================
    $('a.smooth-scroll').smoothScroll({
        speed: 1000,
    });

    $('.nav-smooth-scroll a').smoothScroll({
        speed: 1000,
        offset: -80,
    });

});