let num=[12,34,56,67,78,89]
let b=num.toString();
console.log(b);

let c= num.join("_");
console.log(c);
console.log("type of b and type of c is",typeof(b)," ",typeof(c));

let r=num.pop();
console.log(r)
console.log(num)


num.push(100)
console.log(num.length)
console.log(num)

//removes from the start oof the array
let r1=num.shift();
console.log(r1);

//adds to the start of the array
num.unshift(1222);
console.log(num.length)
console.log(num)