var mystring="This is pargraph about a \"String methode\"";
var mynumber=100;
console.log (typeof(mystring));
console.log (mystring.length);
console.log (mynumber.toString());
console.log (mystring.indexOf("about",5));
console.log (mystring.search(/About/i));
console.log (mystring.split());
console.log (mystring.split(" ",3));
console.log (mystring.slice(7,15));//(required,optional)
console.log (mystring.substring(15,7));
console.log (mystring.substr(5,20));
console.log (mystring.charAt(mystring.length-1));
console.log (mystring.charCodeAt(3));
console.log (mystring.replace(/a/g,"!"));
console.log (mystring.concat("This is End"+">>>>>>Thank you"));
console.log (mystring.toUpperCase());
console.log (mystring.toLowerCase());
console.log (mystring.trim());
console.log (mystring.link("https://www.google.com"));
console.log (mystring.toUpperCase().split("",5));
console.log (String.fromCharCode(104,97,99,107));