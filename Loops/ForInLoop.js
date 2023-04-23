objMarks={
vikas:"20",
pinku:"34",
harish:"12",
Majnu:"67",
lovish:"100",
kutika:"26"
}

for(let a in objMarks){
console.log(objMarks[a]);
console.log("Marks of ",a,"are ",objMarks[a])
}


//for of loop is used for iterables i.e Array or String butnot for object
let aString="vikas ki dikaan"
for(b of aString){
console.log(b)
}