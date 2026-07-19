// What is a Variable?
// A variable is a container used to store data

// Types of Variables

// 1. let :-
// -> Block scoped ({ })
// -> Can be reassigned
// -> Cannot be redeclared in the same scope
let age=20;
age=18;


// 2. const :-
// -> Block Scoped
// -> Cannot be reassigned
const PI=3.14159;
// PI=3.14    // ❌ Not allowed


// 3. var :-
// -> Function scoped
// -> Can be reassigned and redeclare
// -> Avoid using in Modern JavaScript
var name="Gaurav";
name="Tushar";     // ✅ Allowed

let city="Dadri";

console.log("My name is", name);      // ',' it adds automatically a space 
console.log("My name is "+ name);     // '+' it doesn't add space automatically

// If we don't assign value to a variable
let surname;                         // It gives undefined

// To print all data in a table
console.table([name, age, city, surname]);
