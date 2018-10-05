$(document).ready(function () {
    $(".active-1").click(function () {
        $(".active-1-body").slideToggle(
            function(){
                $(".active-2-body").slideUp("fast");
                $(".active-3-body").slideUp("fast");
            }
        );
    });
    $(".active-2").click(function () {
        $(".active-2-body").slideToggle(
            function(){
                $(".active-1-body").slideUp("fast");
                $(".active-3-body").slideUp("fast");
            }
        );
    });
    $(".active-3").click(function () {
        $(".active-3-body").slideToggle(
            function(){
                $(".active-1-body").slideUp("fast");
                $(".active-2-body").slideUp("fast");
            }
        );
    });
});