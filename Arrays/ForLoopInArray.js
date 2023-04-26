let num=[10,20,30,40,50,60,70,80,90,100]
console.log("Through for in loop")
for(a in num){
    console.log(num[a])
}

console.log("through for of loop  ")
for(a of num){
    console.log(a);
}

//For Each Loop in java
console.log("by creatiing a fucntion in for loop")
num.forEach((element)=>{
    console.log(element*element)
})

num.forEach((vikasFun)=>{
        console.log(vikasFun+2)
})
vikas=()=>{
    console.log("Inside vikas's function ")
}
vikas()

//Array.from
let name="vikas"
let arr=Array.from(name)
console.log(arr)

