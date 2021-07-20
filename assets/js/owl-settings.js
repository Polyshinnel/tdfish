$(".banner-slider").owlCarousel({
    responsiveClass:true,
    dots: true,
    loop:true,
    nav:false,
    items: 1
});

$('.banner-arrow-right').on('click', function() {
    $(this).parent().parent().find('.owl-next').trigger('click');
});
$('.banner-arrow-left').on('click', function() {
    $(this).parent().parent().find('.owl-prev').trigger('click');
});