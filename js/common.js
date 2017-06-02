$(document).ready(function() {
	//	tabs ready
//	$(".tabs").lightTabs();
	
	//Попап 
	//Документація: http://dimsemenov.com/plugins/magnific-popup/documentation.html
	//	<a class="open-popup-link" href="path-to-image.jpg">Open popup</a>
//	$('.open-popup-link').magnificPopup({
//		type: 'image',
//		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//		// other options
//	});
//	//	<a href="#more-content" class="open-popup-link"></a>	
//	//	$('.open-popup-link').magnificPopup({
//	//		type:'inline',
//	//		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//	//		// other options
//	//	});			
//
//	//Каруселька
//	//Документація: http://owlgraphic.com/owlcarousel/
//	var owl = $(".carousel");
//	owl.owlCarousel({
//		items : 3,
//		autoHeight : true
//	});
//	owl.on("mousewheel", ".owl-wrapper", function (e) {
//		if (e.deltaY > 0) {
//			owl.trigger("owl.prev");
//		} else {
//			owl.trigger("owl.next");
//		}
//		e.preventDefault();
//	});
//	$(".next_button").click(function() {
//		owl.trigger("owl.next");
//	});
//	$(".prev_button").click(function() {
//		owl.trigger("owl.prev");
//	});
//    
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


$('.filtering').slick({
	slidesToShow: 4,
	slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function(){
	if (filtered === false) {
		$('.filtering').slick('slickFilter',':even');
		$(this).text('Unfilter Slides');
		filtered = true;
	} else {
		$('.filtering').slick('slickUnfilter');
		$(this).text('Filter Slides');
		filtered = false;
	}
});