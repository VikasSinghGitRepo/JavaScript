const myObject = {
    "person1": {
      "name": "John",
      "age": 30,
      "contact": {
        "email": "john@example.com",
        "phone": {
          "home": "123-456-7890",
          "work": "987-654-3210"//myObject.person1.contact.phone.work;
        }
      },
      "address": {
        "home": {
          "street": "123 Main St",//myObject.person1.address.home.street
          "city": "New York",
          "state": "NY",
          "zip": "10001"
        },
        "work": {
          "street": "456 Broad St",//myObject.person1.address.work.street
          "city": "San Francisco",
          "state": "CA",
          "zip": "94107"
        }
      },
      "skills": {
        "programming": {
          "languages": ["JavaScript", "Python", "Java"],//
          "frameworks": ["React", "Django", "Spring"]//myObject.person1.skills.programming.frameworks[2]
        },
        "design": {
          "software": ["Photoshop", "Illustrator", "Sketch"],//myObject.person1.skills.design.software[0]
          "techniques": ["UI Design", "UX Design", "Graphic Design"]
        }
      }
    },
    "person2": {
      "name": "Jane",
      "age": 25,
      "contact": {
        "email": "jane@example.com",
        "phone": {
          "home": "111-222-3333",
          "work": "444-555-6666"
        }
      },
      "address": {
        "home": {
          "street": "789 Park Ave",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90001"
        },
        "work": {
          "street": "234 Main St",
          "city": "Seattle",
          "state": "WA",
          "zip": "98101"
        }
      },
      "skills": {
        "programming": {
          "languages": ["JavaScript", "Ruby", "C++"],
          "frameworks": ["Angular", "Ruby on Rails", "Qt"]
        },
        "design": {
          "software": ["InDesign", "After Effects", "Figma"],
          "techniques": ["Motion Graphics", "Print Design", "Brand Identity"]//myObject.person2.skills.design.techniques[0]--->motion Graphics
        }
      }
    }
  };
  
  // Accessing the values in the object
  console.log(myObject.person1.address.home.city); // Output: New York
  console.log(myObject.person2.contact.phone.work); // Output: 444-555-6666
  console.log(myObject.person1.skills.programming.frameworks[1]); // Output: Django
  console.log(myObject.person2.skills.design.techniques[2]); // Output: Brand Identity

  console.log("MY answers...................")
  console.log(myObject.person2.skills.design.techniques[0]);
  console.log(myObject.person1.skills.design.software[0]);
  console.log(myObject.person1.skills.programming.frameworks[2]);
  console.log(myObject.person1.address.work.street);
  console.log(myObject.person1.address.home.street);
  console.log(myObject.person1.contact.phone.work);

  