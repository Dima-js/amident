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
	
});

//to top button
$(document).scroll(function() {	
	if($(this).scrollTop() != 0) { 
		$('#to-top').removeClass('is-hidden');
	} else {
		$('#to-top').addClass('is-hidden');
	}		
});