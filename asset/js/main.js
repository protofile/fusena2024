$(document).ready(function(){

    $(".fs-acc-head").click(function(){
        $(".fs-acc-item").removeClass("active");
        $(this).parent().addClass("active");
    });

});