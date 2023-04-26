const myObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  },
  projects: [  
    {
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet",
      team: [
        {
          name: "Jane",
          position: "Manager"
        },
        {
          name: "Tom",
          position: "Developer"
        }
      ]
    },
    {
      name: "Project 2",
      description: "Consectetur adipiscing elit",//myObject.projects[1].description;
      team: [
        {
          name: "Bob",
          position: "Manager"
        },
        {
          name: "Sara",
          position: "Designer"
        },
        {
          name: "Alice",
          position: "Developer"
        }
      ]
    }
  ]
};

// Accessing the values in the object
console.log(myObject.name); // Output: John
console.log(myObject.address.street); // Output: 123 Main St
console.log(myObject.projects[0].name); // Output: Project 1
console.log(myObject.projects[1].team[2].name); // Output: Alice
console.log(myObject.projects[1].team[1].position);//Designer
console.log(myObject.projects[1].description);
