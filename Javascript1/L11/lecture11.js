var thedate=new Date();
console.log(thedate);

var thedate1=new Date("25 Nov , 2020 21:15:03");
console.log(thedate1);

var thedate2=new Date("1990-10-15  4:30:00 +04:00"); //no sensitive
console.log(thedate2);

var years=1000*60*60*24*30*12;
var z =console.log(Date.now()/years);
console.log(Math.round(Date.parse("1990-05-05 04:50:00")/years));

console.log(thedate.toISOString());
console.log(thedate.toDateString());
console.log(thedate.toTimeString());



console.log("******************<get Function >*************************");

console.log(thedate.getDate());
console.log(thedate.getDay());
console.log(thedate.getFullYear());
console.log(thedate.getHours());
console.log(thedate.getMinutes());
console.log(thedate.getSeconds());
console.log(thedate.getMilliseconds());
console.log(thedate.getTime());
console.log(thedate.getTimezoneOffset());
console.log(thedate.getUTCHours());


console.log("******************< set Function >*************************");
var thedate5=new Date();

thedate5.setDate(8);
console.log(thedate5);

thedate5.setFullYear(2021)
console.log(thedate5);

thedate5.setHours(10,05,10,150)
console.log(thedate5);//hour only is requirment ..others is optional

thedate5.setMinutes(50);
console.log(thedate5);

thedate5.setSeconds(10)
console.log(thedate5);

thedate5.setMilliseconds(100);
console.log(thedate5);

thedate5.setMonth(12);
console.log(thedate5);


 