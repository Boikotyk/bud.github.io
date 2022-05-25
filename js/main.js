 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	// siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
	  var OnePageNavigation = function() {
		var navToggler = $('.site-menu-toggle');

		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
		  e.preventDefault();

		  var hash = this.hash;

		  $('html, body').animate({
			'scrollTop': $(hash).offset().top - 50
		  }, 600, 'easeInOutExpo', function() {
			// window.location.hash = hash;

		  });

		});
	  };
	  OnePageNavigation();

	  var siteScroll = function() {



		$(window).scroll(function() {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	  };
	  siteScroll();


  	var counter = function() {
		
		$('#about-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	$(document).ready(function(){
		$("#home").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
		});
	});

	var ANIMATION_SPEED = 300
	var SCROLL_SPEED = 200

	// Adjust card-details position relative to grid based on changing number of
	// columns per row.
	var updateCardDetailsPos = function () {
		var w = jQuery(window).width
		var cardDetails = jQuery('.card-details')
		var cardDetailsSize = cardDetails.length

		cardDetails.each(function (i) {
			var cardsPerRow = jQuery(this).css('grid-column-end') - 1
			var row = Math.floor(i / cardsPerRow)
			var gridRowStyle = (row + 2) + ' / ' + (row + 3)

			jQuery(this).css('grid-row', gridRowStyle)
		})
	}

	var handleResize = function () {
		updateCardDetailsPos()
	}

	var scrollToButton = function (button) {
		jQuery('html, body').animate({
			scrollTop: button.offset().top
		}, SCROLL_SPEED)
	}

	// Clicking a card should toggle its corresponding details block open (and
	// close other details blocks that might already be open).
	var handleCardClick = function () {
		var clickedCard = jQuery(this)
		var clickedCardIcon = clickedCard.find('.card-icon').first()
		var cards = jQuery('.cards')
		var cardsSize = cards.length
		var i = cards.index(this)
		var clickedDetails = jQuery('.card-details:eq(' + i + ')')
		var openCard = jQuery('.card.open').first()
		var openDetails = jQuery('.card-details.open').first()
		var sameRowDetails = clickedDetails.css('grid-row') === openDetails.css('grid-row')
		var clickClose = clickedCard.hasClass('open')

		// set all cards to "closed"
		jQuery('.cards').removeClass('open')
		jQuery('.card .card-icon').removeClass('card-close')
		jQuery('.card-details').removeClass('open')

		if (!clickClose) {
			clickedCardIcon.addClass('card-close')
			clickedCard.addClass('open')
			clickedDetails.addClass('open')
		}

		// close/open details (use "fade" if on same row as existing open details,
		// otherwise, use "slide").
		if (clickClose) {
			clickedDetails.slideToggle(ANIMATION_SPEED)
			scrollToButton(clickedCard)
		} else if (!clickClose && sameRowDetails) {
			clickedDetails.fadeIn(ANIMATION_SPEED)
			openDetails.fadeOut(ANIMATION_SPEED)
		} else {
			openDetails.slideUp(ANIMATION_SPEED).promise().done(function () {
				clickedDetails.slideToggle(ANIMATION_SPEED)
				scrollToButton(clickedCard)
			})
		}
	}

	// Wait until markup and styles have finished rendering before intializing
	// JS resizing (setTimeout(0) forces wait until next available draw cycle).
	jQuery(document).ready(function () {
		setTimeout(function () {
			jQuery('.cards').click(handleCardClick)
			jQuery(window).resize(handleResize)
			handleResize()
		}, 0)
	})

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("actives");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
	$(document).ready(function () {
		$("form").submit(function (event) {
			var formData = {
				name: $("#name").val(),
				email: $("#email").val(),
				superheroAlias: $("#superheroAlias").val(),
			};

			$.ajax({
				type: "POST",
				url: "process.php",
				data: formData,
				dataType: "json",
				encode: true,
			}).done(function (data) {
				console.log(data);
			});

			event.preventDefault();
		});
	});
	function generatePDF() {
		const element = document.getElementById('invoice');
		html2pdf()
			.from(element)
			.save();
	}

});

