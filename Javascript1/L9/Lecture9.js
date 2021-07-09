//for (initial;condition;final expression){//code}
//for (variable in object){//code}
//if (object.hasOwnProperty(properites)){//code}
//while
//do while
for (var i=0;i<=10;i++) {
   console.log("Value="+i);
}

var my_car={color:"black",type:"BMW",price:"$15 000"};
for(var prop in my_car){
   console.log(my_car[prop])
}

if(my_car.hasOwnProperty("color")){
    console.log(my_car.color)
    
}
 document.write("<select>")
for (var j=2000;j<=2030;j++) {
     
   document.write("<option value="+j+">"+j+"</option>")
      
}
document.write("</select>") 
  
var x=1;
while(x<=10){
    console.log("-----------------------------")
    console.log("x= "+x)
    x++;
if(x>6){
    console.log("*************** stop ***************")
   continue;
}   
      }

var y=10;
do{
    console.log(y)
    y--;
}
while(y>=1);