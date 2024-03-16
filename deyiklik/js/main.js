$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.width-to-height').each(function () {
        var width = $(this).width();
        $(this).css("height", width);
    });

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $(".navbar-toggler-icon").click();
        }
    });

    $('.owl-carousel').owlCarousel({
        autoplayHoverPause :true,
        autoplay: true,
        items: 5,
        stagePadding:82,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        navigation: false,
        dots: false,
        loop: true,
        responsive:{
            0:{
                items: 1,
                stagePadding:60,
            },
            365:{
                items: 1,
                stagePadding:82,
            },
            430:{
                items: 2,
                stagePadding:30,
            },
            576:{
                items: 2,
                stagePadding:82,
            },
            768:{
                items: 3,
                stagePadding:82,
            },
            992:{
                items: 4,
                stagePadding:82,
            },
            1200:{
                items: 5,
                stagePadding:82,
            }
        }
    });

    $('.collapse').on('shown.bs.collapse', function () {
        $(window).scrollTop(0);
        $(".menuopener").removeClass("lnr-menu");
        $(".menuopener").addClass("lnr-cross");
        $("body").addClass("o-hidden");
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(".menuopener").addClass("lnr-menu");
        $(".menuopener").removeClass("lnr-cross");
        $("body").removeClass("o-hidden");
    });
    $(".nav-item.nav-link").click(function () {
        if ($(window).width() < 991.98) {

            $(".navbar-toggler").click();
        }

    })
})