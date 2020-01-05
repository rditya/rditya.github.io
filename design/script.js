// create preload function
// $(window).on('load', function(){
//     $('.preload').fadeOut('slow');
// });

var $grid = $('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$(document).ready(function($){
    $('.portfolio-menu ul li').click(function (e) {
        $("li").removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
        var selector = $(this).attr('data-filter');
        
        $grid.isotope({
            filter: selector
        });
        return false;
    });

    $('#about').click(function (e){
        // show
        $('#card-about').removeClass('fadeInLeft');
        $('#card-about').removeClass('hidden');
        $('#card-about').addClass('fadeOutLeft');
        $('#card-about').addClass('show');

        // hide 
        $('#card-resume').removeClass('fadeOutLeft');
        $('#card-resume').removeClass('show');
        $('#card-resume').addClass('fadeInLeft');
        $('#card-resume').addClass('hidden');

        $('#card-project').removeClass('fadeOutLeft');
        $('#card-project').removeClass('show');
        $('#card-project').addClass('fadeInLeft');
        $('#card-project').addClass('hidden');

        $('#card-contact').removeClass('fadeOutLeft');
        $('#card-contact').removeClass('show');
        $('#card-contact').addClass('fadeInLeft');
        $('#card-contact').addClass('hidden');

        e.preventDefault();
    });

    $('#resume').click(function (e){
        // show
        $('#card-resume').removeClass('fadeInLeft');
        $('#card-resume').removeClass('hidden');
        $('#card-resume').addClass('fadeOutLeft');
        $('#card-resume').addClass('show');
        
        // hide 
        $('#card-about').removeClass('fadeOutLeft');
        $('#card-about').removeClass('show');
        $('#card-about').addClass('fadeInLeft');
        $('#card-about').addClass('hidden');

        $('#card-project').removeClass('fadeOutLeft');
        $('#card-project').removeClass('show');
        $('#card-project').addClass('fadeInLeft');
        $('#card-project').addClass('hidden');

        $('#card-contact').removeClass('fadeOutLeft');
        $('#card-contact').removeClass('show');
        $('#card-contact').addClass('fadeInLeft');
        $('#card-contact').addClass('hidden');

        e.preventDefault();
    });


    $('#project').click(function (e){
        // show 
        $('#card-project').removeClass('fadeInLeft');
        $('#card-project').removeClass('hidden');
        $('#card-project').addClass('fadeOutLeft');
        $('#card-project').addClass('show');
        
        // hide 
        $('#card-about').removeClass('fadeOutLeft');
        $('#card-about').removeClass('show');
        $('#card-about').addClass('fadeInLeft');
        $('#card-about').addClass('hidden');

        $('#card-resume').removeClass('fadeOutLeft');
        $('#card-resume').removeClass('show');
        $('#card-resume').addClass('fadeInLeft');
        $('#card-resume').addClass('hidden');

        $('#card-contact').removeClass('fadeOutLeft');
        $('#card-contact').removeClass('show');
        $('#card-contact').addClass('fadeInLeft');
        $('#card-contact').addClass('hidden');

        e.preventDefault();

    });

    $('#contact').click(function (e){
        // show 
        $('#card-contact').removeClass('fadeInLeft');
        $('#card-contact').removeClass('hidden');
        $('#card-contact').addClass('fadeOutLeft');
        $('#card-contact').addClass('show');
        
        // hide 
        $('#card-about').removeClass('fadeOutLeft');
        $('#card-about').removeClass('show');
        $('#card-about').addClass('fadeInLeft');
        $('#card-about').addClass('hidden');

        $('#card-resume').removeClass('fadeOutLeft');
        $('#card-resume').removeClass('show');
        $('#card-resume').addClass('fadeInLeft');
        $('#card-resume').addClass('hidden');

        $('#card-project').removeClass('fadeOutLeft');
        $('#card-project').removeClass('show');
        $('#card-project').addClass('fadeInLeft');
        $('#card-project').addClass('hidden');

        e.preventDefault();

    });

    $('#color1').click(function(e){
        $('.bubble').css('background', 'linear-gradient(30deg, rgba(212, 18, 18, 0.7), rgba(241, 172, 94, 1))');
        $('.card').css('background-color', 'white');
        $('.card-profile').removeClass('changed');
        $('.change-color').css('color','black');
        $('.dark-hover').hover(function(){
            $(this).css('color','rgba(212, 18, 18, 0.7)');
            }, function() {
                $(this).css('color','black');
            });
        $('.opacity-color').css('color','black');
        $('#changed-after').removeClass('changed');
        $('.switch-color').css('color','#F1AC5E');
        $('.circle-quote').css({'background-color':'white','color':'rgba(212, 18, 18, 0.7)', 'border':'1px solid rgba(0, 0, 0, .2)'});
        $('.content-title').removeClass('changed');
        $('.profile-button').removeClass('changed');
        $('.button').removeClass('changed');
        $('.size-profile').css({'box-shadow' : '-10px 10px rgba(212, 18, 18, 0.2)'});
        $('.date').css({'border' : '1px solid #eee', 'color':'#ccc'});
        $('.resume-active').css({'border' : '1px solid rgba(212, 18, 18, 0.7)', 'color':'rgba(212, 18, 18, 0.7)'});
        $('.resume-item').removeClass('changed');
        $('.resume-title').removeClass('changed');
        $('.border-line-v').removeClass('changed');
        $('.icon').css('color','rgba(212, 18, 18, 0.7)');
        $('.percentage').css('background-color','rgba(212, 18, 18, 0.7)');
        $('.progress').css('background-color','#e9ecef');


        e.preventDefault();

    });

    $('#color2').click(function(e){
        $('.bubble').css('background','linear-gradient(30deg,#17171b 0%,#28282f 100%)');
        $('.card').css('background-color', '#31313A');
        $('.card-profile').addClass('changed');
        $('.change-color').css('color','rgba(255,255,255,.85)');
        $('.dark-hover').hover(function(){
            $(this).css('color','rgba(200, 34, 200,1)');
            }, function() {
                $(this).css('color','rgba(255,255,255,.85)');
            });
        $('.opacity-color').css('color','rgba(255,255,255,.65)');
        $('#changed-after').addClass('changed');
        $('.switch-color').css('color','rgb(200, 34, 200)');
        $('.circle-quote').css({'background-color':'#31313A','color':'rgb(200, 34, 200)', 'border':'1px solid rgba(200, 34, 200, .4)'});
        $('.content-title').addClass('changed');
        $('.profile-button').addClass('changed');
        $('.button').addClass('changed');
        $('.size-profile').css({'box-shadow' : '-10px 10px rgba(200, 34, 200, 0.2)'});
        $('.date').css({'border' : '1px solid #666', 'color':'#666'});
        $('.resume-active').css({'border' : '1px solid rgb(200, 34, 200)', 'color':'rgb(200, 34, 200)'});
        $('.resume-item').addClass('changed');
        $('.resume-title').addClass('changed');
        $('.border-line-v').addClass('changed');
        $('.icon').css('color','rgb(200, 34, 200)');
        $('.progress').css('background-color','rgba(102, 102, 102, .55)');
        $('.percentage').css('background-color','rgb(200, 34, 200)');


        e.preventDefault();

    });

    $("#html").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        foregroundColor: "rgba(212, 18, 18, 0.7)",
        backgroundBorderWidth: 15,
        backgroundColor: "#E9ECEF",
        percent: 95,
        textSize: 28,
        textStyle: 'font-size: 18px;',
        textY: '107'
    });

    $("#css").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        foregroundColor: "rgba(212, 18, 18, 0.7)",
        backgroundBorderWidth: 15,
        backgroundColor: "#E9ECEF",
        percent: 80,
        textSize: 28,
        textStyle: 'font-size: 18px;',
        textY: '107'
    });

    $("#php").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        foregroundColor: "rgba(212, 18, 18, 0.7)",
        backgroundBorderWidth: 15,
        backgroundColor: "#E9ECEF",
        percent: 75,
        textSize: 28,
        textStyle: 'font-size: 18px;',
        textY: '107'
    });

    $("#js").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        foregroundColor: "rgba(212, 18, 18, 0.7)",
        backgroundBorderWidth: 15,
        backgroundColor: "#E9ECEF",
        percent: 72,
        textSize: 28,
        textStyle: 'font-size: 18px;',
        textY: '107'
    });
});


var jquery = $.noConflict(true);
