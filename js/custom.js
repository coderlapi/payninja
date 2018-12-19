
$(document).ready(function(){

	$("#ptn_slider").owlCarousel({
		smartSpeed: 1000,
	    margin: 10,
	    nav: true,
	    dots: false,
	    loop: true,
	    responsiveClass: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        767:{
	            items:3,
	            nav:false
	        },
	        992:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	});

});