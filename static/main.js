// preloader
$(window).on('load', function () {
      $("#status").fadeOut();
      $("#preloader").delay(100).fadeOut("fast");
      $("body").delay(100).css({overflow: "visible"});
});

$(function() {
    $(".carousel").carousel({
        interval: 10000,
        pause: true
    });

  $(".carousel .carousel-inner").swipe( {
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            this.parent().carousel("next");
        },
        swipeRight: function () {
            this.parent().carousel("prev");
        },
        threshold: 0,
        tap: function(event, target) {
            window.location = $(this).find(".carousel-item.active a").attr("href");
        },
        excludedElements:"label, button, input, select, textarea, .noSwipe"
    });

    $(".carousel .carousel-inner").on("dragstart", "a", function() {
        return false;
    });

    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});

