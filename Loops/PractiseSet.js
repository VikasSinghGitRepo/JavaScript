//write a program to print the //marks of a student in an object using for loop
const objMarks={
vikas:100,
rohan:70,
pinky:45
}

//for(let a in objMarks){
//console.log("Marks of ",a," is",objMarks[a])
//}  

for(let i=0;i<Object.keys(objMarks).length;i++){
console.log(("Marks of " + Object.keys(objMarks)[i] +" is " + objMarks[Object.keys(objMarks)[i]]))
}

 
//write a program to  print try again untilthe user enters the correct number

let cn=43;
let i=prompt("enter a no");
while(i!=cn){
console.log("Try Again");
i=prompt("Enter a no);
}
console.log("you have entered a correct number")


//function to find mean of 5 numbers
const mean=(a,b,c,d)=>{
return (a+b+c+d)/4
}
mean(34,45,65,76)