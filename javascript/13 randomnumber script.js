var num=Math.floor(Math.randomm());
var num=Math.ceil(Math.randomm());
function randomnumber(min,max)
{
min=Math.ceil(min);
max=Math.floor(max);
return Math.floor(Math.random()*(max-min+1))+min;
}
function generate()
{
    let min=document.getElementById("min_value").value;
    let max=document.getElementById("max_value").value;
    let random1=randomnumber(min,max);
    document.getElementById("output").innerHTML=random1;
}
