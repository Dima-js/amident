$(document).ready(function() {
	//	tabs ready
//	$(".tabs").lightTabs();


	//	<a href="#more-content" class="open-popup-link"></a>	
		$('.leave-review').magnificPopup({
			type:'inline',
			midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			// other options
		});	
        $('.leave-review-floating').magnificPopup({
			type:'inline',
			midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			// other options
		});
    

//    //    Слайдер
//    //    Документація: http://kenwheeler.github.io/slick/
//    $('.slider').slick({
//        dots: true,
//        infinite: false,
//        speed: 300,
//        slidesToShow: 4,
//        slidesToScroll: 4,
//        responsive: [
//        {
//          breakpoint: 1024,
//          settings: {
//            slidesToShow: 3,
//            slidesToScroll: 3,
//            infinite: true,
//            dots: true
//          }
//        },
//        {
//          breakpoint: 600,
//          settings: {
//            slidesToShow: 2,
//            slidesToScroll: 2
//          }
//        },
//        {
//          breakpoint: 480,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1
//          }
//        }
//        // You can unslick at a given breakpoint now by adding:
//        // settings: "unslick"
//        // instead of a settings object
//        ]
//    });

	//Кнопка "Вверх"
	//Документація:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#to-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	//$(".wrap_min-top-menu a:nth-child(2)").hover(function(event){
	//	event.preventDefault();
	//	//$('.header-tooltip').toggleClass('active');
	//	$('.header-tooltip').css({"opacity" : "1","visibility" : "visible"});
	//})


	$('.filtering').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true
	});


	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-nav-thumbnails',
	});

	$('.slider-nav-thumbnails').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider',
		dots: false,
		focusOnSelect: true,
		loop:true
	});

	//remove active class from all thumbnail slides
	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

	//set active class to first thumbnail slides
	$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

	// On before slide change match active thumbnail to current slide
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide;
		$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
		$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});

//UPDATED

	$('.slider').on('afterChange', function(event, slick, currentSlide){
		$('.content').hide();
		$('.content[data-id=' + (currentSlide + 1) + ']').show();
	});
$('.wrap_nav >ul>li:first-child').click(function(event){
	event.preventDefault();
	$('.wrap_nav>ul>li:first-child ul').toggleClass('active');
	$(this).toggleClass('arrow');

})
	$('.wrap_nav >ul>li:nth-child(2)').click(function(event){
		event.preventDefault();
		$('.wrap_nav>ul>li:nth-child(2) ul').toggleClass('active');
		$(this).toggleClass('arrow');
	})

});

//to top button
$(document).scroll(function() {	
	if($(this).scrollTop() != 0) { 
		$('#to-top').removeClass('is-hidden');
	} else {
		$('#to-top').addClass('is-hidden');
	}		
});



$(".searchk").click(function(e) {

	$(".sinp").css('display','block');
	$(".searchk").addClass('imgs');
	$(".searchk").removeClass('searchk');
});


