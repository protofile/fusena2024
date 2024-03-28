$(document).ready(function(){

    $(".fs-acc-head").click(function(){
        $(".fs-acc-item").removeClass("active");
        $(this).parent().addClass("active");
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
    });

    $(".burger-bt").click(function(bbt){
        bbt.preventDefault();
        $($(this).attr("href")).toggleClass("show");
        $(this).toggleClass("clicked");
    });

});