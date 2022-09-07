$(".typed").each(function() {
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings',
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
    });
    });

(function ($) {
	"use strict";

// Sections Scroll
$(document).ready(function() {
	$("li").click(function() {
        // Clear các thẻ li có Class click cũ
		$("li").removeClass("click");
        // Thêm Class
		$(this).addClass("click");
	});
});

/*------------------------
   Scroll to top
-------------------------- */
$(function () {
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 400) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

})(jQuery)