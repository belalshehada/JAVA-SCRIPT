//part1
var name="Ahmed",
      id="4444";
if (id = 5) {
   console.log("just variable");
}
if (name == "Ahmed1") {
    console.log("compration operators");
}
if (name === "Ahmed") {                             //Explain   ! ;&&;||
    console.log("Identical operators");
}
else if (name != Ahmed) {                         
    document.write("Not Equal operators");
}
else if (name != Ahmed && id==4444) {                         
    document.write("AND operators");
}
else if (name !== Ahmed || id===4444) {                         
    document.write("OR operators");
}
else{
   document.write("This End");
}

//part2
function say_hello() {
    alert("Hello ever body");
}
//say_hello();

//part3
var age=prompt("What`s your age??")//relative whith if