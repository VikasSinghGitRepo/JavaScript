let num=[1,2,3,4,5,6,7,8,9];
console.log(num.length)
delete num[0]

console.log(num)
console.log(num.length)


let num_more=[10,11,12,13,14,15,16,17,18,19]
let num_more_more=[121,23,434,556,789,890,098]
let newArray=num.concat(num_more,num_more_more)
console.log(newArray)

//sort
//it sorts alphabetically not with size of the element
let num1=[23,21,434,789,556,898,098].sort()
console.log(num1)

//to sort in descending order
let compareDesc=(a,b)=>{
    return b-a;
}


let compare=(a,b)=>{
    return a-b;
}
//to sort in ascending order
//it needs an compare function
num1.sort(compare)
console.log(num1)

/*
In the code you provided, the compare function is used as an argument to the sort method of the num array. The compare function takes two parameters a and b, which are the elements being compared by the sort method. Here's how the sort method works with the compare function:

The sort method takes the first two elements of the num array and passes them as arguments to the compare function.
The compare function subtracts the second argument from the first argument (i.e., a - b) and returns the result.
The sort method uses the result of the compare function to determine the order of the elements in the sorted array. If the result is negative, it means that the first element (a) should come before the second element (b) in the sorted array. If the result is positive, it means that the second element (b) should come before the first element (a) in the sorted array. If the result is zero, the order of the elements doesn't matter.
The sort method continues comparing the remaining elements of the num array and swapping them if necessary until all elements are in sorted order.
So, the compare function is used as an argument to the sort method to determine the order of the elements in the sorted array.
*/


//reverse
console.log("reverse")
let num2=[23,21,434,789,556,898,098]
let revnum=num2.reverse();
console.log(revnum)
console.log(num2)


//splice
console.log("splice")
let numSplice=[12,23,34,45,56,67,78,89]
//numSplice.splice(2,1,1023,1024,1025,1026);//where_to_insert how_many_to_remove no_you_want_to_insert
let deletedValues=numSplice.splice(2,0,101,102,103,104,105,106,107)
console.log(deletedValues)
console.log(numSplice)

//slice  -->it creates a new array
let numSlice=[12,23,34,45,56,67,78,89]
let new_numSlice=numSlice.slice(3);
let new_numSlice2=numSlice.slice(3,4);
connsole.log(new_numSlice)
console.log(new_numSlice2)
console.log(new_numSlice)



