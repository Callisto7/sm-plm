(function($) {

	

	"use strict";

	

	

	//Hide Loading Box (Preloader)

	function handlePreloader() {

		if($('.preloader').length){

			$('.preloader').delay(200).fadeOut(500);

		}

	}

	

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}

	

	headerStyle();

	

	

	//Submenu Dropdown Toggle

	if($('.main-header li.dropdown ul').length){

		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		

		//Dropdown Button

		$('.main-header li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('ul').slideToggle(500);

		});

		

		//Megamenu Toggle

		$('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('.mega-menu').slideToggle(500);

		});

		

		//Disable dropdown parent link

		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {

			e.preventDefault();

		});

	}

	

	

	//Hidden Bar Menu Config

	function hiddenBarMenuConfig() {

		var menuWrap = $('.hidden-bar .side-menu');

		// hidding submenu 

		menuWrap.find('.dropdown').children('ul').hide();

		// toggling child ul

		menuWrap.find('li.dropdown > a').each(function () {

			$(this).on('click', function (e) {

				e.preventDefault();

				$(this).parent('li.dropdown').children('ul').slideToggle();

	

				// adding class to item container

				$(this).parent().toggleClass('open');

	

				return false;

	

			});

		});

	}

	

	hiddenBarMenuConfig();

	

	

	//Accordion Box

	if($('.accordion-box').length){

		$(".accordion-box").on('click', '.acc-btn', function() {

			

			var outerBox = $(this).parents('.accordion-box');

			var target = $(this).parents('.accordion');

			

			if($(this).hasClass('active')!==true){

				$(outerBox).find('.accordion .acc-btn').removeClass('active');

			}

			

			if ($(this).next('.acc-content').is(':visible')){

				return false;

			}else{

				$(this).addClass('active');

				$(outerBox).children('.accordion').removeClass('active-block');

				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);

				target.addClass('active-block');

				$(this).next('.acc-content').slideDown(300);	

			}

		});	

	}

	

	

	//Event Countdown Timer

	if($('.time-countdown').length){  

		$('.time-countdown').each(function() {

		var $this = $(this), finalDate = $(this).data('countdown');

		$this.countdown(finalDate, function(event) {

			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Mints</div>  ' + '<div class="counter-column"><span class="count">%S</span>Sec</div>'));

		});

	 });

	}

	

	

	//Price Range Slider

	if($('.price-range-slider').length){

		$( ".price-range-slider" ).slider({

			range: true,

			min: 0,

			max: 90,

			values: [ 8, 85 ],

			slide: function( event, ui ) {

			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );

			}

		});

		

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	

	}

	

	

	//Jquery Spinner / Quantity Spinner

	if($('.quantity-spinner').length){

		$("input.quantity-spinner").TouchSpin({

		  verticalbuttons: true

		});

	}	

	

	

	//Custom Seclect Box

	if($('.custom-select-box').length){

		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');

	}

	

	

	//Tabs Box

	if($('.tabs-box').length){

		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {

			e.preventDefault();

			var target = $($(this).attr('data-tab'));

			

			if ($(target).is(':visible')){

				return false;

			}else{

				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');

				$(this).addClass('active-btn');

				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);

				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');

				$(target).fadeIn(300);

				$(target).addClass('active-tab');

			}

		});

	}

	

	

	//Accordion Box

	if($('.accordion-box').length){

		$(".accordion-box").on('click', '.acc-btn', function() {

			

			var outerBox = $(this).parents('.accordion-box');

			var target = $(this).parents('.accordion');

			

			if($(this).hasClass('active')!==true){

				$(outerBox).find('.accordion .acc-btn').removeClass('active');

			}

			

			if ($(this).next('.acc-content').is(':visible')){

				return false;

			}else{

				$(this).addClass('active');

				$(outerBox).children('.accordion').removeClass('active-block');

				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);

				target.addClass('active-block');

				$(this).next('.acc-content').slideDown(300);	

			}

		});	

	}

	

	//Fact Counter + Text Count

	if($('.count-box').length){

		$('.count-box').appear(function(){

	

			var $t = $(this),

				n = $t.find(".count-text").attr("data-stop"),

				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				

			if (!$t.hasClass("counted")) {

				$t.addClass("counted");

				$({

					countNum: $t.find(".count-text").text()

				}).animate({

					countNum: n

				}, {

					duration: r,

					easing: "linear",

					step: function() {

						$t.find(".count-text").text(Math.floor(this.countNum));

					},

					complete: function() {

						$t.find(".count-text").text(this.countNum);

					}

				});

			}

			

		},{accY: 0});

	}

	

	

	//Single Item Carousel

	if ($('.single-item-carousel').length) {

		$('.single-item-carousel').owlCarousel({

			loop:true,

			margin:10,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:1

				},

				1024:{

					items:1

				},

				1200:{

					items:1

				}

			}

		});    		

	}

	

	

	//Two Item Carousel

	if ($('.two-item-carousel').length) {

		$('.two-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:2

				},

				1024:{

					items:2

				},

				1200:{

					items:2

				}

			}

		});    		

	}

	

	

	//Three Item Carousel

	if ($('.three-item-carousel').length) {

		$('.three-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				768:{

					items:2

				},

				800:{

					items:2

				},

				1024:{

					items:3

				},

				1200:{

					items:3

				}

			}

		});    		

	}

	

	

	//Five Item Carousel

	if ($('.five-item-carousel').length) {

		$('.five-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				768:{

					items:2

				},

				800:{

					items:2

				},

				1024:{

					items:3

				},

				1400:{

					items:4

				},

				1600:{

					items:5

				}

			}

		});    		

	}

	

	

	//Sortable Masonary with Filters

	function enableMasonry() {

		if($('.sortable-masonry').length){

	

			var winDow = $(window);

			// Needed variables

			var $container=$('.sortable-masonry .items-container');

			var $filter=$('.filter-btns');

	

			$container.isotope({

				filter:'*',

				 masonry: {

					columnWidth : '.masonry-item.small-column'

				 },

				animationOptions:{

					duration:500,

					easing:'linear'

				}

			});

			

	

			// Isotope Filter 

			$filter.find('li').on('click', function(){

				var selector = $(this).attr('data-filter');

	

				try {

					$container.isotope({ 

						filter	: selector,

						animationOptions: {

							duration: 500,

							easing	: 'linear',

							queue	: false

						}

					});

				} catch(err) {

	

				}

				return false;

			});

	

	

			winDow.on('resize', function(){

				var selector = $filter.find('li.active').attr('data-filter');



				$container.isotope({ 

					filter	: selector,

					animationOptions: {

						duration: 500,

						easing	: 'linear',

						queue	: false

					}

				});

			});

	

	

			var filterItemA	= $('.filter-btns li');

	

			filterItemA.on('click', function(){

				var $this = $(this);

				if ( !$this.hasClass('active')) {

					filterItemA.removeClass('active');

					$this.addClass('active');

				}

			});

		}

	}

	

	enableMasonry();

	

	

	// Sponsors Carousel

	if ($('.sponsors-carousel').length) {

		$('.sponsors-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 500,

			autoplay: 4000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				480:{

					items:2

				},

				600:{

					items:3

				},

				800:{

					items:4

				},

				1024:{

					items:5

				}

			}

		});    		

	}

	

	

	//LightBox / Fancybox

	if($('.lightbox-image').length) {

		$('.lightbox-image').fancybox({

			openEffect  : 'fade',

			closeEffect : 'fade',

			helpers : {

				media : {}

			}

		});

	}

	

	

	//Contact Form Validation

	if($('#contact-form').length){

		$('#contact-form').validate({

			rules: {

				username: {

					required: true

				},

				email: {

					required: true,

					email: true

				},

				subject: {

					required: true

				},

				phone: {

					required: true

				},

				message: {

					required: true

				}

			}

		});

	}

	

	

	// Scroll to a Specific Div

	if($('.scroll-to-target').length){

		$(".scroll-to-target").on('click', function() {

			var target = $(this).attr('data-target');

		   // animate

		   $('html, body').animate({

			   scrollTop: $(target).offset().top

			 }, 1500);

	

		});

	}

	

	

	// Elements Animation

	if($('.wow').length){

		var wow = new WOW(

		  {

			boxClass:     'wow',      // animated element css class (default is wow)

			animateClass: 'animated', // animation css class (default is animated)

			offset:       0,          // distance to the element when triggering the animation (default is 0)

			mobile:       true,       // trigger animations on mobile devices (default is true)

			live:         true       // act on asynchronously loaded content (default is true)

		  }

		);

		wow.init();

	}





/* ==========================================================================

   When document is Scrollig, do

   ========================================================================== */

	

	$(window).on('scroll', function() {

		headerStyle();

	});

	

/* ==========================================================================

   When document is loading, do

   ========================================================================== */

	

	$(window).on('load', function() {

		handlePreloader();

		enableMasonry();

	});	



})(window.jQuery);