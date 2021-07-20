$(".banner-slider").owlCarousel({
    responsiveClass:true,
    dots: true,
    loop:true,
    nav:false,
    items: 1
});

$(".our-partners__slider").owlCarousel({
    loop:true,
    autoWidth:true,
    dots: false,
    items: 3,
    margin: 12,
    nav:false,
    responsive:{
        0:{
            items:1,
            center: true,
        },
        740:{
            items:2,
        },
        1000:{
            items:3,
            margin: 60
        },
        1290:{
            items:3,
            margin: 80
        },
        1420:{
            items:4,
            margin: 100
        }
    }
});

$('.banner-arrow-right').on('click', function() {
    $(this).parent().parent().find('.owl-next').trigger('click');
});
$('.banner-arrow-left').on('click', function() {
    $(this).parent().parent().find('.owl-prev').trigger('click');
});

$('.our-partners__slider-arrow_right').on('click', function() {
    $(this).parent().parent().find('.owl-next').trigger('click');
});
$('.our-partners__slider-arrow_left').on('click', function() {
    $(this).parent().parent().find('.owl-prev').trigger('click');
});