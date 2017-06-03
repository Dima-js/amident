$(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('js-active');
        $('.menu .wrap_nav > ul').toggleClass('js-active');
        e.preventDefault();
    });
});