$(document).ready(function(){
    $("#btn1").click(function(){
   $("#demo1").fadeIn();
   $("#demo2").fadeIn("slow");  
    $("#demo3").fadeIn(3000);

    });
    $("#btn2").click(function(){
        $("#demo1").fadeOut();
   $("#demo2").fadeOut(3000);  
    $("#demo3").fadeOut();


    });
});