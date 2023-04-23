let a=prompt("Hey whats your age?")
console.log(typeof a)
a=Number.parseInt(a)
console.log(typeof a)

if(a<0){
alert("you are 0 ");
}
else if(a<9 && a>0){
alert("You are child");
}
else if(a>9 && a<=18){
alert("aap bandook nahi chala sakte ");
}
else{
alert("congrats you are elgible for license");
}



//ternary operaator
let age=Number.parseInt(prompt("enter your age"))
console.log("you can",(age<18? "not drive":"drive"))



//Switch case
let a1=prompt("enter any nobetween 1 to 7")
a1=Number.parseInt(a1)
switch(a1){

case 1:
alert("Monday");
console.log("Monday");
break;

case 2:
alert("Tuesday");
console.log("Tuesday");
break;

case 3:
alert("Wednesday");
console.log("Wednesday");
break;

case 4:
alert("Thursday");
console.log("Thursday");
break;

case 5:
alert("Friday");
console.log("Friday");
break;

case 6:
alert("Saturday");
console.log("Saturday");
break;

case 7:
alert("Sunday");
console.log("Sunday");
break;

default:
alert("Enter number only between 1 to  7");
break;

}





