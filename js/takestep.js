
$(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h >= 120) {
        $(".navbar").css({
          
            boxShadow: '0 0 15px 3px rgb(0 0 0 / 6%)'
        });
      
    }
    else {
        $(".navbar").css({
           
            boxShadow: 'none'
        });
      
    }
});


$('.navigation-bar a').click(function () {

    let Hrefs = $(this).attr('href');
    $('.navigation-bar .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
    let HrefsOffset = $(Hrefs).offset().top;
    $("body,html").animate({ scrollTop: HrefsOffset }, 1000)
});

$('.btn-home a').click(function () {
let homeHref = $(this).attr('href');
let homeHrefOffset = $(homeHref).offset().top;
$("body,html").animate({ scrollTop: homeHrefOffset }, 1000)
console.log(homeHref);

});