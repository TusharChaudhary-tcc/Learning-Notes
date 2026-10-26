// ## Creating Object using new Object() :-
const user= new Object();
user.name= "Tushar";
user.age= 18;

// console.log(user);

// ## Creating Object using Object.create() :- Create a new object with a specified prototype.
const userPrototype={
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
const user3= Object.create(userPrototype);
user3.name="Shanu";

// user3.greet();

// ## Nested Objects:-
const regularUser={
    email: "Some@gmail.com",
    FullName:{
        firstName: "Tushar",
        lastName: "Chaudhary"
    }
};
regularUser.address="Dadri";          // Adding elements in a Object.
// console.log(regularUser);


// ## Optional Chaining:- Prevents errors when a property does not exist.
// If address does not exist, it returns undefined instead of throwing an error.
const RoomDetails={
    roomNo: "KC-205",
    StudentDetails:{
        Student1:{
            firstName: "Raghav",
            lastName: "Sharma",
            age: 21
        }
    }
}

// console.log(RoomDetails.StudentDetails?.Student2);

// ## Nullish coalescing:- Provides a default value when the value is null or undefined.
// console.log(RoomDetails.StudentDetails ?? Student2);


// ## Object.assign() :-
// Concate two or more objects:-
const obj1={1:'a' , 2:'b'};
const obj2={3:'c' , 4:'d'};
const obj3={5:'e' , 6:'f'};

// const objAss= {obj1, obj2};      // It push objects in a object

const objAss= Object.assign({}, obj1, obj2, obj3);
// console.log(objAss);


// ## Spread Operator (...) :-  Used to copy or merge objects.
const objSpread={...obj1, ...obj2, ...obj3};
// console.log(objSpread);


// ## Array of objects:-
const users=[
    {
        id: 1,
        email: "1@email.com"
    },
    {
        id: 2,
        email: "2@email.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    }
];
// console.log(users[1].email);


// Object utility methods:-
const CloudUser={
    id: "123abc",
    name: "Sam",
    email: "Sam@gmail.com",
    isLoggedIn: false
};
// console.log(Object.keys(CloudUser));                // Returns array of keys
// console.log(Object.values(CloudUser));              // Returns array of values
// console.log(Object.entries(CloudUser));             // Returns key-value pairs


// ## To check a property exists or not :-
// console.log(CloudUser.hasOwnProperty('isLoggedIn'));
// console.log(CloudUser.hasOwnProperty('isLogged'));


// ## Object destructuring:- Object destructuring is a short way to extract properties from an object and store them in variables.

const Info={
    name:"Pradeep",
    age: 31,
    city: "Delhi"
}

const {name, age, city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// Rename a variable:-
const {name: user4}= Info;
// console.log(user4);


// Set a default value
const { country= "India"}=Info;
// console.log(country);


// Nested destructing
const student={
    name: "Tushar",
    address: {
        state: "UP"
    }
};
const{
    address: { state}
} = student;

// console.log(state);
// In short: Object destructuring extracts object properties into variables using {}.



// JSON Format :- JSON(JavaScript Object Notation) is a text format used to store and transfer data.

// {
//     "name": "Monu",
//     "age": 20,
//     "isStudent": true
// }

// Important points:

// - Data is written in key-value pairs.
// - Keys must use double quotes.
// - Supported values: string, number, boolean, array, object, and null.
// - JSON does not support functions or undefined.

// Convert JSON string to JavaScript object:-
const userData = JSON.parse('{"name":"Tushar","age":20}');
console.log(userData);

// Convert JavaScript object to JSON string:
const jsonData = JSON.stringify(userData);
console.log(jsonData);


// In short: JSON is commonly used for sending and receiving data between a server and an application.