const a = [1, 2, 3, 4, 5];

a.forEach((value, index, array) => {
  console.log(`Index: ${index}, Value: ${value}`);
  console.log(`Original Array: ${array}`);
  array[index] = value * 2;
  console.log(`Modified Array: ${array}`);
 // return value*20//it does not return a value
});


/*
Index: 0, Value: 1
Original Array: 1,2,3,4,5
Modified Array: 2,2,3,4,5
Index: 1, Value: 2
Original Array: 2,2,3,4,5
Modified Array: 2,4,3,4,5
Index: 2, Value: 3
Original Array: 2,4,3,4,5
Modified Array: 2,4,6,4,5
Index: 3, Value: 4
Original Array: 2,4,6,4,5
Modified Array: 2,4,6,8,5
Index: 4, Value: 5
Original Array: 2,4,6,8,5
Modified Array: 2,4,6,8,10
In this example, the forEach method is called on the a array and passed a callback function that takes three parameters (value, index, and array). Inside the callback function, the index and value of each element are logged to the console, as well as the original and modified arrays. The modified array is created by multiplying each element by 2 and updating the corresponding element in the array using the array[index] notation. The output shows the index, value, original array, and modified array at each iteration of the forEach loop.






*/