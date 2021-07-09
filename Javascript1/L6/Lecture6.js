var friends=[];
      friends[0]="Wasem" ;
      friends[1]="Abood" ;
      friends[2]="Ahmed" ;
      friends[3]="Mohammed" ;
      console.log(friends[3]);
       console.log(friends.length);
      var array1=["group0","group1","group2","group3"];
document.getElementById("div_1").innerHTML="Array is : "+array1;
if (array1.constructor==Array)
{ console.log("Cheack : this is Array");}
else{console.log("Cheack : this isn`t Array");}
friends.length=2;
 document.getElementById("div_2").innerHTML=friends.join("<==>");
  document.getElementById("div_3").innerHTML=friends.toString();
  console.log(friends.toString());
  

