//what will the following print in javascript
console.log("vik\"".length);//-->4


//Q2  include(),startWith(),endswith()
let s='The quick brown fox jumps over the lazy dog'
let w="fox"
console.log(`the "${w}" ${s.includes(w)?'is':'is not'} in the senetence`)

console.log(s.startsWith("The"))
console.log(s.endsWith("dog"))


//use of toUpperCase and toLowerCase
console.log(w.toUpperCase())
console.log(w.toLowerCase())

//Extract the amount from the string
//"Please give Rs 1000"
let s="Please give Rs 1000"
let amount=Number.parseInt(s.slice("Please give Rs ".length))
console.log(amount)


//try to change the 4th character of the given sting
let s1="vikas"
console.log("replacing 4th character of",s1,"with j",s1.replace(s1.at(4),j))




