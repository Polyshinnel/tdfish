$('.header__menu-btn').on('click',function(){
    var state = $('.header__mobile-navigation').css('display');
    var menuImg = 'assets/img/menu-btn.svg';
    var crossImg = 'assets/img/menu-cross.svg';
    if(state == 'none'){
        $('.header__menu-btn img').attr('src', crossImg);
    }else{
        $('.header__menu-btn img').attr('src', menuImg);
    }
    $('.header__mobile-navigation').slideToggle();
});

$('.header__mobile-navigation-wrapper-overlay').on('click',function(){
    $('.header__mobile-navigation').slideUp();
    var menuImg = 'assets/img/menu-btn.svg';
    $('.header__menu-btn img').attr('src', menuImg);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $('.header__mobile-navigation').slideUp();
        var menuImg = 'assets/img/menu-btn.svg';
        $('.header__menu-btn img').attr('src', menuImg);
    } 
});