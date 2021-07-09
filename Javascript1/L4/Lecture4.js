var x=3;
 document.getElementById("test1").innerHTML=x;
(function change_x() {
     x=2;
  document.getElementById("test2").innerHTML=x;
})(); //self invoke 

document.write(x);
