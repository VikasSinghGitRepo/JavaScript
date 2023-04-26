//create an array of numbers and take input and add numbersss to the array
let num=[11,12,13,14,15,16,17]
console.log("predefined  Array ", num)
let n=prompt("how many numbers do you want to enter")
for(let i=0;i<n;i++){
    let no=Number.parseInt(prompt("enter no",i+1))
    let l=num.length
    num[l]=no
    //or num.push(no)
}
console.log("after addition of numbers",num)

//keep adding elements to the array at 1st place until you get 0 as a input
let num1=[11,12,13,14,15,16,17]
console.log("predefined  Array ", num1)
let n1=prompt("how many numbers do you want to enter")
for(let i=0;i<n1;i++){
    let no=Number.parseInt(prompt("enter no",i+1))
    if(no==0){console.log("You have entered  0");break;}
    else{let l=num.length
    num1.unshift(no);
    }
}
console.log("after addition of numbers",num1)

//you can do  it by  using do while loop
let num2=[11,12,13,14,15,16,17]
let no
console.log("predefined  Array ", num2)
do{
    no=Number.parseInt(prompt("enter no"))
    num2.unshift(no);
    console.log("NOw  Array  became", num2)
}while(no!=0);


//filter for numbers divivsible by 10  froma given array
let arr=[11,120,130,14,15,16,170]
let arrrNew=arr.filter((DivByTen)=>{
    if(DivByTen%10==0){
        return DivByTen
    }
})
console.log(arrrNew)

//create an array of square of given numbers
let sqArr=[101,121,131,141,151,161,171,181,191]
let sqArrNew=sqArr.map((square)=>{
    return square*square
})
console.log(sqArrNew)

//--using foreach loop  for the same
let sqArr1=[101,121,131,141,151,161,171,181,191]
sqArr1.forEach((square)=>{
    console.log(square*square);
})

//return factorial  of given no from an array of first n natural numbers 
let nFact=[1,2,3,4,5,6,7,8,9,10]
let fact=nFact.reduce((h1,h2)=>{
    return h1*h2
})
console.log(fact)
