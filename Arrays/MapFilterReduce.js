console.log("Map in javascript")
let arr=[45,23,21]
let newArr=arr.map((value)=>{
    return value+1
})
console.log(newArr)
console.log(arr)

console.log("FIlter")
let arr2=[123,435,654,76,87,98,134,564]
let arr2New=arr2.filter((a)=>{
    return a>100
})
console.log(arr2New)

console.log("Reduce Method")
let arr3=[1,2,3,4,5,6,7,8]
const reduce_func=(h1,h2)=>{
    return h1+h2
}
let arr3New=arr3.reduce(reduce_func)
console.log(arr3New)

let arr4=[12,13,14,15,16,17,18,19,20]
let newArr4=arr4.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newArr4)
