//javascript file

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);
    });

    $("#show").click(function(){
        $("p").show(2000);
    });
    $("button").click(function(){
        $("p").toggle();//toggle button use to switch element.
    });

});