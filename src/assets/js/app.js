;(($)=> {

    /* /////// ...SLICK-SLIDER first... /////// */
    $(function () {
        $('.slider').slick({
                autoplay: true,

                dots: true,
                speed: 800,

                prevArrow: '<i class="prewArrow"></i>',
                nextArrow: '<i class="nextArrow"></i>',
                arrows: true
            }
        );
    });

    /* /////// ...SLICK-SLIDER second... /////// */
    $(function () {
        $('.sliderTEAM').slick({
                autoplay: true,
                infinite: true,

                slidesToShow: 3,
                slidesToScroll: 1,

                dots: true,
                speed: 800,
                autoplaySpeed: 7000,

                prevArrow: '<i class="prewArr"></i>',
                nextArrow: '<i class="nextArr"></i>',
                arrows: true
            }
        );
    });
})(jQuery);


/* /////// ...SCROLLING-TOP... /////// */

;(function ($) {
    $(function () {
        $(document).ready(function () {
            $("#ButtonScrollTop").on("click", function () {
                $('body,html').animate({scrollTop: 0}, 1500);
            });
        });
    });
})(jQuery)



/* /////// ...SCROLLING-TO-SECTIONS... /////// */

;
(function ($) {
    $(function () {
        $(document).ready(function () {
            $("#ButtonViewGallery").on("click", function () {
                $('body,html').animate({scrollTop: 0}, 1500);
            });
        });
    });
})(jQuery)


;
(function ($) {

    $(document).ready(function () {
        $("#upMenu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);


;(function ($) {

    $(document).ready(function () {
        $("#LearnMore").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);


/* /////// ...GOOGLE-MAP... /////// */

;(function () {
    window.onload = function () {
        var map,
            point = {lat: 49.5956815, lng: 34.5203292},
            point2 = {lat: 49.5956815, lng: 34.5203292},
            iv1Content = document.querySelector('.info-window');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 14,
                scrollwheel: false,
                disableDefaultUI: true
            });

            var marker2 = new google.maps.Marker({
                position: point2,
                map: map,
                icon: '{{root}}assets/img/pin.png',
            });

            var infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker2.addListener('click', function () {
                infowindow.open(map, marker2);
                iv1Content.style.opacity = 1;
            });
        }

        initMap();
    }
})();


/* ---- MENU-HAMBURGER ----  //////////////////////////////// */

;(function ($) {
    $(function () {
        $('.min-icon').on('click', function () {
            $(this).next().slideToggle(1000);
        });
        $(window).on('resize', function () {
            var menu = $('.ba-header__menu-UL');
            if ($(window).width() >= 670) {
                menu.show();
            } else {
                menu.hide();
            }
        });


        $('.ba-header__menu-UL a').hover(
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).closest('li').find('ul').stop().slideDown(1000);
            },
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).closest('li').find('ul').stop().slideUp(1000);
            }
        );
    });
})(jQuery);