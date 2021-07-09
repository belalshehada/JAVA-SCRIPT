function calculator(num1,num2) {
    return "the result is = "+(num1*num2);
}
alert(calculator(10,3));
console.log(calculator(10,3));
document.getElementById("test1").innerHTML="<p style='color:red'>"+calculator(10,3)+"</p>";

//part2
function convert() {
    var value1=document.getElementById("input1").value;
    var result = "This amount after convert(USD) To (Shekel) : "+(value1 * 3.5) +"  shekel";
    document.getElementById("input_result").innerHTML=result;
    // if   else  switch
    }
    
    //part 3
    function age_test() {
     var value2=document.getElementById("input2").value;
     var result = "Hello My friend";
     switch (value2) {
       case  "18" :
       document.getElementById("input2_result").innerHTML=result;
       break;
       case  "19" :
       document.getElementById("input2_result").innerHTML=result;
       break;
       case  "20" :
       document.getElementById("input2_result").innerHTML=result;
       break;
    default:
    document.getElementById("input2_result").innerHTML="Not Allowed ";
    break;   
     }
    }