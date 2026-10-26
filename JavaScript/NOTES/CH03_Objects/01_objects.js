// Object Properties
// - Object stores data in key-value pairs.
// - Keys are converted to strings, except Symbol keys.
// - Property names can contain spaces, but then bracket notation is required.


// There is a term singleton it forms when we create objects using Constructor
// 1. user.name;                // Dot Notation
// 2. user["name"];             // Bracket Notation
// user["full name"];        // Required for spaces

// ## Object Properties:-
// 1). Adding, updating, and deleting properties
// user.city="Delhi"           // Add property
// user.age=21;                // Update property
// delete user.city;           // Delete property

// 2). Methods inside objects:- A function stored inside an object is called a method.
const user={
    name: "Tushar",
    greet(){
        console.log(`Hello, ${this.name}`);
    }
};
user.greet();

// Note:-
// - this refers to the object calling the method.
// - Arrow functions do not have their own this.

console.log("****************************");
// Object destructing:- Destructing extracts properties into variables.
const user1={
    name: "Vivek",
    age: 20
};
const { name, age }=user1;
console.log(name);
console.log(age);


console.log("****************************");
// Spread operator:- Used to copy or merge objects.
// Spread creates a shallow copy, not a deep copy
const updatedUser={...user, city: "Noida"};
const merged={...user, ...user1};
console.log(updatedUser);
console.log(merged);




// There are two ways to create objects:-
// 1. Using Object Literals
// 2. Using Constructor

// 1. Object Literals:-

// Symbol declare:-
const mySym= Symbol("Key1");

const JsUser={
    name: "Tushar",
    "full name": "Tushar Chaudhary",
    [mySym]: "Key2",                        // when refer symbol we use square brackets []
    age: 18,
    email: "tushar@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Wednesday"],
};
console.log("Print Whole Object:- ");
console.log(JsUser);


console.log("**************************           (1)   ");

// These are two methods to print object element :- 1) using .     and     2) using [""]
console.log(JsUser.isLoggedin);
console.log(JsUser["age"]);


console.log("**************************           (2)   ");
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


console.log("**************************           (3)   ");
console.log("We can change value of object element:- ");
JsUser.email="tushar.microsoft.com";
console.log(JsUser);
console.log("We changed the email it reflects perfectly");


console.log("**************************           (4)   ");
// # Object Freeze:-
// - Cannot add, delete, or modify properties.
// - Only shallow freezing is performed.
console.log("We can freeze the Object so that no one can change the element:- ");
Object.freeze(JsUser);
JsUser.email="tushar.amazon.com";
console.log(JsUser);
console.log("We try to change email but due to Object freeze no change reflects");

// # Object Seal:-
// - Cannot add or delete properties.
// - Existing properties can still be modified.

console.log("**************************          (5) ");
const obj1={
    name: "Sonu",
    age: 20,
    location: "Greater Noida",
    Section: "CSE 35"
};

obj1.greeting= function(){
    console.log("Hello Guyz!");
}
obj1.greeting();
obj1.greetingTwo=function(){
    console.log(`Hello Guyz, I am ${this.name}`);
}
obj1.greetingTwo();
console.log(obj1);



// ## Nested Objects:-
console.log("*******************************");
console.log("Nested Objects:- ");
const user2={
    name: "Manveer Oberoi",
    address: {
        city: "Kolkata",
        country: "India"
    }
}
console.log(user2.address.city);

// ## Looping through objects:- 
console.log("*******************************");
console.log("Looping through objects:- ");

for(const key in JsUser){
    console.log(key, JsUser[key]);
}


// 2. Constructor:-
// Object.create();                         // Singleton is formed


// Continue in next file  02_objects.js ...