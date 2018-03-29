$(document).ready(function() {

	

	/*----------------------------
		1. Preloader
	-------------------------------*/ 
	$(window).on('load',function() {
		$("#spinningSquaresG1").delay(1000).fadeOut(500);
		$(".inTurnBlurringTextG").on('click',function() {
			$("#spinningSquaresG1").fadeOut(500);
		});
	});

	/*---------------------
	 6. wow js active  
	----------------------- */ 
	new WOW().init(); 
	

	/*---------------------
	 4. one page scrolling 
	 -------------------------*/
	$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInSine');
			event.preventDefault();
	});


   /*----------------------
	5. Scroll To Top    
	-----------------------*/
	$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
					$('.ScrollUp').fadeIn();
			} else {
					$('.ScrollUp').fadeOut();
			}
	});
	$('.ScrollUp').on('click',function(){
			$('html, body').animate({
					scrollTop: 0
			}, 1500);
			return false;
	});


	/* ------------------------------------------  the end ---------------------------------------------*/

});