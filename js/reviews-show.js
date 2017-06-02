$(document).ready(function() {
    $('.patients-reviews-question__show-more').click(function(e) {
        $(this).closest('.patients-reviews-text').addClass('js-active');
        e.preventDefault();
    });
    $('.patients-reviews-question__close').click(function(e) {
        $(this).closest('.patients-reviews-text').removeClass('js-active');
        e.preventDefault();
    });   
    
//    leave review floating button
    var showButton = $(".leave-review").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > showButton ) {
            $('.leave-review-floating').addClass('is-visible');
        } else{
            $('.leave-review-floating').removeClass('is-visible');
        }
    });
    
//    show more mobile info    
    $('.reviews-page-info__mobile-expand').click(function(e) {
        $(this).parent('.reviews-page-info').addClass('js-active');
        e.preventDefault();
    });   
});