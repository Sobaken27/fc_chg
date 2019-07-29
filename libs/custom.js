$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		stagePadding: 130,
		onTranslated: animateImgFunc,
		onChanged: animateImgClear,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	   // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
		function animateImgFunc() {
		$(".owl-carousel .active .inner-testimonial img").addClass("animated fadeIn full-opacity");
	}

	//Удаляем класс с анимацией изображения
	function animateImgClear() {
		$(".owl-carousel .active .inner-testimonial img").removeClass("animated fadeIn full-opacity");
	}
});
