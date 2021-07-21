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

$(document).ready(function() {
    var path = window.location.pathname;
    if(path != '/'){
        $('.header').addClass('header_border-bottom');
    }
});

$('.recall-form__base').on('click',function(){
    $('.recall-form__overlay').fadeOut(400);
});

$('.recall-form__cross').on('click',function(){
    $('.recall-form__overlay').fadeOut(400);
    $('.recall-form__input-block input').val('');
    $('.recall-form__region-select-input input').val('Регион:');
});

$('.recall-form__region-select-input').on('click',function(){
    var state = $('.recall-form__region-select-block').css('display');
    if(state == 'none'){
        $('.input-angle').addClass('input-angle_rotate');
    }else{
        $('.input-angle').removeClass('input-angle_rotate');
    }
    $('.recall-form__region-select-block').slideToggle();
});

$('.recall-form__region-select-unit').on('click',function(){
    var region = $(this).parent().find('p').html();
    $(this).parent().parent().find('.recall-form__region-select-input input').val(region);
    $('.recall-form__region-select-block').slideUp();
    $('.input-angle').removeClass('input-angle_rotate');
});

$('.header__button-recall,.footer__btn-recall,.fish-sales__btn').on('click',function(){
    $('.recall-form__overlay').fadeIn(400);
});

$('.header__mobile-navigation-recall-btn').on('click',function(){
    $('.header__mobile-navigation').slideUp();
    var menuImg = 'assets/img/menu-btn.svg';
    $('.header__menu-btn img').attr('src', menuImg);
    $('.recall-form__overlay').fadeIn(400);
});

$('.recall-form__btn').on('click',function(){
    $('.recall-form__overlay').fadeOut(400);
    $('.recall-form__input-block input').val('');
    $('.recall-form__region-select-input input').val('Регион:');
});