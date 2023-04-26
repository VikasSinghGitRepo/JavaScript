const myObject = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",//myObject.address.zip
      coordinates: {
        latitude: 40.7128,//myObject.coordinates.latitude
        longitude: -74.0060 //myObject.coordinates.longitude
      }
    },
    projects: [
      {
        name: "Project 1",//myObject.projects[0].name;
        description: "Lorem ipsum dolor sit amet",//myObject.projects[0].description;
        team: [
          {
            name: "Jane",//myObject.projects[0].team[0].name;
            position: "Manager",
            skills: ["Leadership", "Problem Solving"]//myObject.projects[0].team[0].skills[1]-->problemSolving
          },
          {
            name: "Tom",
            position: "Developer",
            skills: ["JavaScript", "HTML", "CSS"]
          }
        ],
        budget: {
          total: 5000,
          spent: 3500,
          remaining: 1500
        }
      },
      {
        name: "Project 2",
        description: "Consectetur adipiscing elit",
        team: [
          {
            name: "Bob",
            position: "Manager",
            skills: ["Project Management", "Communication"]
          },
          {
            name: "Sara",
            position: "Designer",
            skills: ["UX Design", "Graphic Design"]
          },
          {
            name: "Alice",
            position: "Developer",
            skills: ["React", "Node.js"]
          }
        ],
        budget: {
          total: 8000,//myObject.projects[1].budget.total;
          spent: 6000,
          remaining: 2000
        }
      }
    ]
  };
  
  // Accessing the values in the object
  console.log(myObject.name); // Output: John
  console.log(myObject.address.coordinates.latitude); // Output: 40.7128
  console.log(myObject.projects[0].team[1].skills[2]); // Output: CSS
  console.log(myObject.projects[1].budget.remaining); // Output: 2000
  console.log(myObject.projects[1].budget.total);
  console.log(myObject.projects[0].team[0].skills[1]);
  