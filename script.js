$(document).ready(function () {
	$("#main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
            if ($(window).width() < 1550 ) {
            $('ul li').removeClass("mx-5");
            $('ul li').addClass("mx-4");
        }
                if ($(window).width() < 1228 ) {
            $('ul li').removeClass("mx-4");
            $('ul li').addClass("mx-3");
        }
                if ($(window).width() < 1120 ) {
            $('ul li').removeClass("mx-3");
            $('ul li').addClass("mx-2");
        }
                if ($(window).width() < 991 ) {
            $('ul li').removeClass("d-flex");
        }

});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
    });
});
 $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

