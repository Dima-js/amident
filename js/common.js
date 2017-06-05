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

//mainPage_menu
	$(".m_menu-toggle").click(function(){
		$(".m_nav").slideDown(200);
	});
	$(".m_menu-toggle_active, .m_close_menu").click(function(){
		$(".m_nav").slideUp(200);
	});

	var m_serv=document.getElementById('m_serv'),
		m_about=document.getElementById('m_about'),
		m_serv_content_li_single=document.querySelectorAll("#m_serv_content li")[0],
		m_about_content_li_single=document.querySelectorAll("#m_about_content li")[0];

	$("#m_serv").click(function(){
		if(window.innerWidth<321){
			$("#m_serv_content li").slideToggle(200);
			if (m_serv_content_li_single.offsetHeight>0){
				m_serv.classList.remove( "m_give_me_before_down" );
				m_serv.classList.add( "m_give_me_before" );
			} else {
				m_serv.classList.remove( "m_give_me_before" );
				m_serv.classList.add( "m_give_me_before_down" );
			}
			return false;
		}
	});
	$("#m_about").click(function(){
		if(window.innerWidth<321){
			$("#m_about_content li").slideToggle(200);
			if (m_about_content_li_single.offsetHeight>0){
				m_about.classList.remove( "m_give_me_before_down" );
				m_about.classList.add( "m_give_me_before" );
			} else {
				m_about.classList.remove( "m_give_me_before" );
				m_about.classList.add( "m_give_me_before_down" );
			}
			return false;
		}
	});

	if(window.innerWidth<321){
		$("#m_about").trigger('click');
		m_about.classList.remove( "m_give_me_before_down" );
		m_about.classList.add( "m_give_me_before" );
		$("#m_serv").trigger('click');
		m_serv.classList.remove( "m_give_me_before_down" );
		m_serv.classList.add( "m_give_me_before" );
	}

	window.onresize=function(){
	if(window.innerWidth>320 && (m_about_content_li_single.offsetHeight==0 || m_serv_content_li_single.offsetHeight==0)){
		$("#m_serv_content li").slideDown(200);
		m_serv.classList.remove( "m_give_me_before" );
		m_serv.classList.remove( "m_give_me_before_down" );
		$("#m_about_content li").slideDown(200);
		m_about.classList.remove( "m_give_me_before" );
		m_about.classList.remove( "m_give_me_before_down" );
	}
	if (window.innerWidth<321 && (m_about_content_li_single.offsetHeight>0 || m_serv_content_li_single.offsetHeight>0)){
		$("#m_serv_content li").slideUp(200);
		m_serv.classList.add( "m_give_me_before" );
		$("#m_about_content li").slideUp(200);
		m_about.classList.add( "m_give_me_before" );	
	}
};

//mainPage_read_more
	$("#m_reed_more").click(function(){
		$(".m_reed_me, #m_reed_less").slideDown(200);
		$("#m_reed_more").slideUp(200);

	});
	$("#m_reed_less").click(function(){
		$(".m_reed_me, #m_reed_less").slideUp(300);
		$("#m_reed_more").slideDown(300);
	});

//mainPage_header-carousel

  $("#m_header-carousel").owlCarousel({
  	items: 1,
  	loop:true,
  	dotsEach: true,
  	autoplay: true,
  	autoplayTimeout: 3000,
  	autoplaySpeed: 1000,
  	autoplayHoverPause:true
  });

//mainPage_specialist-carousel

  $("#m_specialist-carousel").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 3000,
  	autoplaySpeed: 1000,
  	autoplayHoverPause:true,
  	responsive: {
  		993:{
  			items: 3
  		},
  		769: {
  			items: 2
  		},
  		481: {
  			items: 3
  		},
  		321: {
  			items: 2
  		}
  	},
  	loop:true
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



$(".searchk").click(function(e) {

	$(".sinp").css('display','block');
	$(".searchk").addClass('imgs');
	$(".searchk").removeClass('searchk');
});


