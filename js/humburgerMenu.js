$(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('js-active');
        $('.menu ul').toggleClass('js-active'); 
        e.preventDefault();
    });
});