$(document).ready(function () {
    var owlWrap = $('.owl-wrapper');
    if (owlWrap.length > 0) {
	if (jQuery().owlCarousel) {
	    owlWrap.each(function () {
		var carousel = $(this).find('.owl-carousel'),
			navigation = $(this).find('.customNavigation'),
			nextBtn = navigation.find('.next'),
			prevBtn = navigation.find('.prev');

		carousel.owlCarousel({
		    itemsCustom: [
			[0, 1],
			[321, 1],
			[421, 2],
			[768, 3],
			[995, 4],
			[1200, 5]
		    ],
		    navigation: false,
		    lazyLoad: true
		});

		// Custom Navigation Events
		nextBtn.click(function () {
		    carousel.trigger('owl.next');
		});
		prevBtn.click(function () {
		    carousel.trigger('owl.prev');
		});
	    });
	}
	;
    }
    ;

    $('.lightgallery').lightGallery();

    $.cookieBar({
	fixed: true,
	acceptOnScroll: 300,
	forceShow: false,
	declineButton: false,
	acceptButton: false,
	policyButton: true
    });


    $('body').flowtype({
	minimum: 320,
	maximum: 1960,
	minFont: 12,
	maxFont: 15,
	fontRatio: 15
    });
});
