let a=1;
let b=2
let c=3;
let d=4;

function onePlusAvg(a,b){
console.log(Math.round(1+(a+b)/2))
console.log("done")
return Math.round(1+(a+b)/2)
}

console.log(onePlusAvg(a,b));
console.log(onePlusAvg(b,c));
console.log(onePlusAvg(a,c));




///arrow function
const sum=(p,q)=>{
return p+q
}

//
const hello=()=>{
console.log("Hello vikas")
}

const hii=()=>{
return "HII"
}

let h=hii()
console.log(h)
hello()


