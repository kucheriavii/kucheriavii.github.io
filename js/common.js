$('.slider-wrap').slick({
    dots: true,
    autoplay: true,
    speed: 600,
    arrows: false
});
$('.product-slider').slick({
    dots: true,
    arrows: false
});
$('.feedback-photos').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true
});
var slikop = $('.feedback-popup').slick({
    infinite: true,
    adaptiveHeight: true,
    arrows: false
})


//Hamburger menu
$(".burger").click(function(){
    $('.main-menu').slideDown(300);
    $('.menu').css('display','none');
    $('.fix').css('display','block');
    $('.close-menu').css('display','block');
    $('i.close').css('display','block');
    $('.logo').addClass('logo-fix');
    $('.logo a').removeClass('centred');
    $('.profile').addClass('profile-fix');
})
$(".logo .close").click(function(){
    $('.main-menu').slideUp(300);
    $('.menu').css('display','block');
    $('.fix').css('display','none');
    $('.close-menu').css('display','none');
    $('i.close').css('display','none');
    $('.logo').removeClass('logo-fix');
    $('.logo a').removeClass('image-fix');
    $('.logo a').addClass('centred');
    $('.profile').removeClass('profile-fix');
})

//Active button header
$('.header-icon').click(function(){
    $('.dropdown-search').slideUp(200);
    $('.header-icon').removeClass('active');
    $(this).addClass("active");

})

$('.del-phone').click(function(){
    $(".contacts").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
})
$('.contacts-close').click(function(){
    $(".contacts").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
})

$('.delivery-box').click(function(){
    $(".delivery-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
})
$('.delivery-close').click(function(){
    $(".delivery-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
})

$('.search-box').click(function(){
    if($('.dropdown-search').is(':visible')){
        $(this).removeClass('active');
        $('.dropdown-search').slideUp(200);
    } else {
        $('.dropdown-search').slideDown(200);
    }
})

/*stars*/
$('.product-raiting-star').click(function(){
    $('.product-raiting-star').removeClass('starred');
    $(this).prevAll('.product-raiting-star').addClass('starred');
    $(this).addClass('starred');
})

/*****sections*******/
$('.detail-info-section-name').click(function(){
    $(this).toggleClass('detail-info-section-opened');
    $(this).parent('div').find('.detail-info-section-wrap').slideToggle(300);
})

/***feedback form*****/
$('button.replaid').click(function(){
    $('.feedback-replaid .feedback-form').slideDown(400);
})

$('.feedback-reply-cancel').click(function(e){
    e.preventDefault();
    $('.feedback-replaid .feedback-form').slideUp(400);
})

/****fedback popup*********/
var $set = $('ul.feedback-photos li');
var siderPopupIndex = 0;
$('ul.feedback-photos').on('click', '.feedback-photo-link', function () {
    siderPopupIndex=$set.index(this);
});

$('ul.feedback-photos').click(function(){
    slikop.slick('slickGoTo', siderPopupIndex);
})
