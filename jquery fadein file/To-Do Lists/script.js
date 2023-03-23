$(function(){
    var $list,$newItemForm;  //variable declaration
    $list=$('ul');
   $newItemForm=$('#newItemForm')
   $newItemForm.on('submit',function(e)

   
    //adding item

   {
    e.preventDefault();
    var text=$('input:text').val()
    $list.append('<li>'+text+'<li>');
    $('input:text').val();

   });


   //removing item
   $list.on('click','li',function(){
    var $this=$(this);
    $this.remove();
   });
});
//prepened means that after
//append means that before