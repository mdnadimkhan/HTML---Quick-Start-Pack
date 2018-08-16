(function ($) {
    "use strict";
	//Documnet Ready Function
	$(document).on('ready', function() {

        
	});

	//Window Load Function
    $(window).on ('load', function (){
        // preloader js
        setTimeout(function() {
            $('.site-wrapper').addClass('site-fully-loaded');
        }, 500);
    })
})(jQuery);