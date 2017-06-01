$(document).ready(function() {
    $('.patients-reviews-question__show-more').click(function(e) {
        $(this).closest('.patients-reviews-text').addClass('js-active');
        e.preventDefault();
    });
    $('.patients-reviews-question__close').click(function(e) {
        $(this).closest('.patients-reviews-text').removeClass('js-active');
        e.preventDefault();
    });    
});