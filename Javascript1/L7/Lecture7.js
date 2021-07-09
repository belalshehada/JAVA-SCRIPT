var variable=["int","double","Boolean","String"];
variable[4]="char";
console.log(variable);
variable.unshift("Start");//add
variable.push("End");
console.log(variable);
//////////////////////////////////////////////////////////////////////////////////////
variable.shift();//remove
variable.pop();
console.log(variable);
///////////////////////////////////////////////////////////////////////////////////
variable.splice(4,1);//remove
variable.splice(5,0,"float");//&&add
console.log(variable);
console.log(variable.splice(4,1));// display this action (ex: remove )
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("div_1").innerHTML=
"Sort Alphapet : " + variable.sort() +"</br>"+"Reverse Arrays : "+ variable.reverse();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("div_2").innerHTML="Sample organize : "+variable.slice(0,3);
document.getElementById("div_3").innerHTML="Sample reverse : "+variable.slice(-4,-1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var array1=["group0","group1","group2","group"];//connect arrays
document.getElementById("div_4").innerHTML="connect : "+variable.concat(array1,"thank you");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(variable.indexOf("String"));
console.log(variable.indexOf("int",0));
console.log(variable.lastIndexOf("String"));