//use logical operatoor to find whether a age of a person is between 10 and 20

let a = Number.parseInt(prompt("What is your age?"))
if(a>=10 && a<=10){
console.log(" Your age lies between 10 and 20")
}
else{
console.log(" Your age lies between 10 and 20")
}


//Demostrate the use of switch statement in java script
let a1 = Number.parseInt(prompt("Enter age between 10 to 20"))
switch(a1){

case 11:
alert("11");
break;

case 12:
alert("12");
break;

case 13:
alert("13");
break;

case 14:
alert("14");
break;

case 15:
alert("15");
break;

case 16:
alert("16");
break;

case 17:
alert("17");
break;

case 18:
alert("18");
break;

case 19:
alert("19");
break;

case 20:
alert("20");
break;

default:
alert("Engter correct number");
break;
}

//check whether a no is divisible by 2 and 3
let a2 = Number.parseInt(prompt("Enter age between 10 to 20"))
if(a2%2==0 && a2%3==0){
alert("Yes it is divisible by both 2 and 3");
}
else{
alert("NO it is not divisible by both 2 and 3");
}

//check whether a no is divisible by either 2 or 3
let a3 = Number.parseInt(prompt("Enter age between 10 to 20"))
if(a3%2==0 || a3%3==0){
alert("Yes it is divisible by both 2 and 3");
}
else{
alert("NO it is not divisible by both 2 and 3");
}


//Ternary operator use
let a4=10
alert("You can",a4>18? "drive":"not drive")