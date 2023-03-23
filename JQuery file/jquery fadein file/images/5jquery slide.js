$(document).ready(function()
{
    $("#flip").click(function(){
      //  $("#panel").slideDown("Slow");//slideDown is used to display the image in down side.
     // $("#panel").slideUp("slow");  //slideUp is use to Up the html element 
     $("#panel").slideToggle("slow");
    });

});