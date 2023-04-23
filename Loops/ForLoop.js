//normal example
for(let i=10;i>0;i--){
alert("The numbers are",i);
}

//sum of n natural numbers
let sum=0
let n=prompt("Enter value of n")
for(let i=0;i<n;i++){
sum+=(i+1)
}
console.log("sum of",n,"natural numbers is ",sum)


//factorial of a number
let n=prompt("enter value whose factorial you want")
let fact=1
for(let i=0;i<n;i++){
fact*=(i+1);
}
alert("value of fact of ",n,"is",fact)
console.log("value of fact of ",n,"is",fact)


