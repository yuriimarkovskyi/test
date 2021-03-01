$(document).ready(function(){
	function callback(){
		$('.testimonials-slider').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			mouseDrag: false,
			touchDrag: false,
			dots: false,
			nav: true,
			navText: ['',''],
			navContainerClass: 'testimonials-slider-nav',
			items: 1,
			responsive: {
				976: {
					stagePadding: 0
				},
				1200: {
					stagePadding: 230
				},
				1300: {
					stagePadding: 280
				},
				1440: {
					stagePadding: 330
				},
				1600: {
					stagePadding: 380
				},
				1800: {
					stagePadding: 430
				},
				2000: {
					stagePadding: 0
				}
			}
		})
		$('.blog-posts').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			autoWidth: true,
			dots: false,
			items: 1,
			responsive: {
				0: {
					margin: 0,
					stagePadding: 0
				},
				375: {
					margin: 10,
					stagePadding: 67
				},
				768: {
					items: 2,
					margin: 20,
					stagePadding: 0
				}
			}
		})
		$('.instagram-block-slider').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			dots: false,
			nav: true,
			navText: ['',''],
			navContainerClass: 'instagram-block-slider-nav',
			margin: 10,
			items: 2,
			responsive: {
				375: {
					items: 3
				},
				1100: {
					items: 4
				},
				1200: {
					items: 5
				},
				1440: {
					items: 6
				}
			}
		})
		if ($(window).width() < 1100) {
			$('.blog-posts').addClass('owl-carousel');
		}
		if ($(window).width() >= 1100) {
			$('.blog-posts').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.blog-posts').find('.owl-stage-outer').children().unwrap();
		}
	}
	$(window).on('resize', callback);
	callback();
});