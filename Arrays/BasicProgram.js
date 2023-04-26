let marks_class_12=[12,34,56,76,98,"nott given",false];
console.log(marks_class_12)
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);//undefined

console.log("The lengfth of class 12 is",marks_class_12.length)
marks_class_12[7]=29//Adding a new value to the array
console.log("The lengfth of class 12 is after adding",marks_class_12.length)
marks_class_12[2]=100
console.log(marks_class_12[2]);
console.log(typeof(marks_class_12));
console.log("printing by for loop");
for(let i=0;i<marks_class_12.length;i++){
    console.log(marks_class_12[i])
}