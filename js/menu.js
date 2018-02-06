$(window).scroll(function(){
    if ($(window).scrollTop() > 58) {
        $('.block-main-menu').addClass('main-menu-fixed');
    }
    else {
        $('.block-main-menu').removeClass('main-menu-fixed')
    }
});
