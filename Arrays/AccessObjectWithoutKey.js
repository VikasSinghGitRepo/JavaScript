const myObject = {
    "person1": {
      "name": "John",
      "age": 30,
      "contact": {
        "email": "john@example.com",
        "phone": {
          "home": "123-456-7890",
          "work": "987-654-3210"
        }
      }
    }
  };

  //first way
const values = Object.values(myObject.person1.contact); // returns an array of values
const homePhone1 = values[1].home; // accesses the value of phone.home using array indexing
console.log(homePhone1); // Output: "123-456-7890"s
  
  //another way
  let homePhone;
  for (const [key, value] of Object.entries(myObject.person1.contact)) {
    if (key === "phone") {
      homePhone = value.home;
      break;
    }
  }
  console.log(homePhone); // Output: "123-456-7890"
  