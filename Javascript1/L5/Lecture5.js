window.onload=function(){
    alert("Hi");
}/*
window.onclick=function(){
    alert("Subscribe Now");
}*/
window.ondblclick=function(){
    alert("you enter two click");
}
window.onkeyup=function(){
 var input1=document.getElementById("input_1").value;
 document.getElementById("div_1").innerHTML=input1*10 +"$"; 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mydiv=document.getElementById("div_2");/*
mydiv.onmouseover=function(){ //بالنسبة للماوس
    "use-strict";
    mydiv.innerHTML="<a href=# >click here</a>"
}*/

var mydiv2=document.getElementById("div_3");
mydiv.onmouseout=function(){ 
    mydiv2.innerHTML="<a href=# >click here2</a>"
}
var myinput=document.getElementById("input_2");
var mydiv4=document.getElementById("div_4");
var Currency=document.getElementById("select_1");
Currency.onchange=function(){ 
mydiv4.innerHTML="Value : " +myinput.value *Currency.value +"  Shekle";
}