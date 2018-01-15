$( function() {
    var minimumRange = 0;
    var maximumRange = 1000;
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ minimumRange, maximumRange ],
        slide: function( event, ui ) {
            $( "#amount-left" ).val(ui.values[ 0 ]);
            $( "#amount-right" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount-left" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-right" ).val( $( "#slider-range" ).slider( "values", 1 ));
} );
$("#amount-left").keyup(function(){
    var minimumRange = parseInt($("#amount-left").val());
    var maximumRange = parseInt($("#amount-right").val());
    if($.isNumeric(minimumRange) && (maximumRange-minimumRange)>40 ){
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, maximumRange ],
            slide: function( event, ui ) {
                $( "#amount-left" ).val(ui.values[ 0 ]);
                $( "#amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $( "#amount-left" ).val( $( "#slider-range" ).slider( "values", 0 ));
        $( "#amount-right" ).val( $( "#slider-range" ).slider( "values", 1 ));
    } else {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 0, maximumRange ],
            slide: function( event, ui ) {
                $( "#amount-left" ).val(ui.values[ 0 ]);
                $( "#amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $( "#amount-left" ).val( $( "#slider-range" ).slider( "values", 0 ));
        $( "#amount-right" ).val( $( "#slider-range" ).slider( "values", 1 ));
    }
    });

$("#amount-right").keyup(function(){
    var minimumRange = parseInt($("#amount-left").val());
    var maximumRange = parseInt($("#amount-right").val());
    if($.isNumeric(minimumRange) && (maximumRange-minimumRange)>40 ){
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, maximumRange ],
            slide: function( event, ui ) {
                $( "#amount-left" ).val(ui.values[ 0 ]);
                $( "#amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $( "#amount-left" ).val( $( "#slider-range" ).slider( "values", 0 ));
        $( "#amount-right" ).val( $( "#slider-range" ).slider( "values", 1 ));
    } else {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, 1000 ],
            slide: function( event, ui ) {
                $( "#amount-left" ).val(ui.values[ 0 ]);
                $( "#amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $( "#amount-left" ).val( $( "#slider-range" ).slider( "values", 0 ));
        $( "#amount-right" ).val( $( "#slider-range" ).slider( "values", 1 ));
    }
});
//sliders
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
    adaptiveHeight: true,
    slidesToScroll: 1
});
var slikop = $('.feedback-popup').slick({
    infinite: true,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    nextArrow: '<i class="sa sa-arrow-right"></i>',
    prevArrow: '<i class="sa sa-arrow-left"></i>'
});

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
});
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
});

//Active button header
$('.header-icon').click(function(){
    $('.dropdown-search').slideUp(200);
    $('.header-icon').removeClass('active');
    $(this).addClass("active");

});
//click handlers
/*********************HEADER MENUS*********************************/
//CONTACTS
$('.del-phone').click(function(){
    $(".contacts").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
});
$('.contacts-close').click(function(){
    $(".contacts").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
});

//delivery
$('.delivery-box').click(function(){
    $(".delivery-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
})
$('.delivery-close').click(function(){
    $(".delivery-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
});
//catalog
$('.show_catalog').click(function(){
    $(".catalog-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.catalog-pic').css('display', 'none');
    $('.header-icon').addClass('active');
});
$('.catalog-section-close').click(function(){
    $(".catalog-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
    $('.header-icon').removeClass('active');
});
//bucked
$('.bucket-icon').click(function(){
    $(".basked-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.catalog-pic').css('display', 'none');
    $('.header-icon').addClass('active');
});
$('.basked-section-close').click(function(){
    $(".basked-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
    $('.header-icon').removeClass('active');
});
//bucked
$('.filter-btn').click(function(){
    $(".filter-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.catalog-pic').css('display', 'none');
    $('.header-icon').addClass('active');
});
$('.filter-section-close').click(function(){
    $(".filter-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
    $('.header-icon').removeClass('active');
});



var totalPositionPrice = $('.basked-item').find('.product-nominal-price').eq(0).text();

$(".addItemBskd").click(function (e) {
    e.preventDefault();
   var howManyItemsInBasked=$(this).parents('form').find('.basked-items-amount').val();
   howManyItemsInBasked++;
   $(this).parents('form').find('.basked-items-amount').val(howManyItemsInBasked);
   $(this).parents('form').find('.basked-items-amount').val(howManyItemsInBasked);
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);

});
$(".removeItemBskd").click(function (e) {
    e.preventDefault();
   var howManyItemsInBasked=$(this).parents('form').find('.basked-items-amount').val();
   if(howManyItemsInBasked>1){
       howManyItemsInBasked--;
       $(this).parents('form').find('.basked-items-amount').val(howManyItemsInBasked);
       $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
   }
});
$('.basked-items-amount').change(function(){
    var howManyItemsInBasked=$(this).val();
    if(howManyItemsInBasked<1){
        $(this).val(1);
    }
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
$('.basked-items-amount').blur(function() {
    var howManyItemsInBasked=$(this).val();
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
$('.basked-items-amount').keyup(function() {
    var howManyItemsInBasked=$(this).val();
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
$('.removePositionBskd').click(function (e) {
    e.preventDefault();
    $(this).parents('.basked-item').remove();
});
//subcatalog
$('.catalog-section .catalog-item .catalog-link').click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass('opened')){
        $(this).parent().removeClass('opened');
        $(this).parent().find('.catalog-subcategory').slideUp(200);
    } else{
        $(this).parent().addClass('opened');
        $(this).parent().find('.catalog-subcategory').slideDown(200);
    }
})
//subfilter
$('.filter-section .filter-item .filter-link').click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass('opened')){
        $(this).parent().removeClass('opened');
        $(this).parent().find('.filter-subcategory').slideUp(200);
    } else{
        $(this).parent().addClass('opened');
        $(this).parent().find('.filter-subcategory').slideDown(200);
    }
})
$('.catalog-section .catalog-item .ul').click(function (e) {
    e.stopPropagation()

})
/*********************HEADER MENUS*********************************/

$('.search-box').click(function(){
    if($('.dropdown-search').is(':visible')){
        $(this).removeClass('active');
        $('.dropdown-search').slideUp(200);
    } else {
        $('.dropdown-search').slideDown(200);
    }
})


$('.product-in-bucked .buy').click(function(){
    $(this).css('display', 'none');
    $('.product-in-bucked .product-in-bucked-text').css('display', 'block')
    $('.product-in-bucked .bucked-icon').css('display', 'block')
})
$('.product-in-bucked .bucked-icon').click(function(){
    $('.product-in-bucked .product-in-bucked-text').css('display', 'none');
    $('.product-in-bucked .bucked-icon').css('display', 'none');
    $('.product-in-bucked .buy').css('display', 'block');
})


$('.product-likes-icon').click(function(){
    if($(this).find('img').attr('src')=='img/heard-gray-icon.png'){
        $(this).find('img').attr('src', 'img/heard-red-icon.png')
        $(this).addClass("active");
    } else{
        $(this).find('img').attr('src', 'img/heard-gray-icon.png')
        $(this).removeClass('active');
    }
})
//navigation click
$(".page-nav .page-num").click(function(){

    if(parseInt($(this).text())){ //if this>a is not a number do not add any class
        $(this).parent('.page-nav').find('.page-num').removeClass('active');
        $(this).addClass('active');
    }
});
$(".item .buy").click(function(){
    if(!($(this).parents('.item').hasClass('item-end'))){
        if($(this).hasClass('bought')){
            $(this).removeClass('bought');
            $(this).find('img').attr('src','img/bucket.png');
        } else {
            $(this).addClass('bought');
            $(this).find('img').attr('src','img/bucket-red-icon.png');
        }
    }
})

/*stars*/
$('.product-raiting-star').click(function(){
    //if need rating
    if(!($(this).parent('.product-raiting-scale').hasClass('raitingOff'))){
        //clean all stars in this element
        $(this).parent().find('.product-raiting-star').removeClass('starred');
        $(this).prevAll('.product-raiting-star').addClass('starred');
        $(this).addClass('starred');
    }
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
/******feedback form*******/
$('button.main-feedback-form').click(function(e){
    $('.leave-feedback').slideDown(300);
    e.stopPropagation();
})
/****fedback popup*********/
var $set = $('ul.feedback-photos li');
var siderPopupIndex = 0;
$('ul.feedback-photos').on('click', '.feedback-photo-link', function () {
    siderPopupIndex=$set.index(this);
});
/**************catalog category active link**********************/
$('.catalog-sort .sort-item').click(function(){
    if(!$(this).hasClass('active')){
        $('.catalog-sort .sort-item').removeClass('active');
        $(this).addClass('active')
    }
})

$('ul.feedback-photos').click(function(){
    setTimeout(function(){
        slikop.slick('slickGoTo', siderPopupIndex);
        $('.popup-wraper').fadeIn(1300);
    })
})
$('.popup-wraper .closer').click(function(){
    $('.popup-wraper').fadeOut(300);
    $('.popup-wraper').css('display','none');
})

