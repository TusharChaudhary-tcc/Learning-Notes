// In JavaScript, there are three ways to declare strings.

// 1. Double Quotes ("")
let str1 = "Hello World";

// 2. Single Quotes ('')
let str2 = 'Hello World';

// 3. Template Literals (Backticks ``)
let name="Tushar";
let age=18;
// console.log(`My name is ${name} and My age is ${age}`);

/* String Interpolation in JavaScript
String Interpolation is the process of inserting variables or expressions directly inside a string using template literals (backticks `) and the ${} syntax.
*/

// Without String Interpolation
let name1 = "Tushar";
// console.log("Hello " + name1);

// With String Interpolation
let name2="Sonu";
// console.log(`Hello ${name2}`);


/* String can be created in two ways:

1. Primitive String (Recommended)
   let str = "Hello";

2. String Object
   let str = new String("Hello");

new String() creates an object, so typeof returns "object".
Prefer primitive strings because they are simpler and more efficient.
*/


let gameName=new String ("CallOfDuty");
// console.log(gameName.__proto__);
// console.log(gameName.__proto__ === String.prototype);

/* What is gameName.__proto__ in JavaScript?
__proto__ is a property that gives you access to an object's prototype.

In JavaScript, every object is connected to another object called its prototype. This prototype contains properties and methods that the object can use.

*/
/*
__proto__:
- It is a property that points to an object's prototype.
- It allows access to inherited properties and methods.
- Strings inherit methods from String.prototype.
- Arrays inherit methods from Array.prototype.
- Objects inherit methods from Object.prototype.
*/

// Some property
console.table([
    gameName.size,
    gameName.length,
    gameName.toUpperCase(),
    gameName.charAt(4),
    gameName.indexOf('k')    
])
const str3=gameName.substring(0,4);          // We can't use negative index in .substring()
console.log(str3);

const newStr=gameName.slice(-10,5);         // We can use negative index in .slice()
console.log(newStr);

/*
Visual Trick for negative indexing
"JavaScript"
 J  a  v  a  S  c  r  i  p  t
 0  1  2  3  4  5  6  7  8  9

-10 -9 -8 -7 -6 -5 -4 -3 -2 -1
*/


const str4="     Tushar      ";
console.log(str4);
console.log(str4.trim());                      // Trim all extra spaces


const url="https://tushar.com/tushar%20chaudhary";
console.log(url.replace('%20', '-'));                       // to replace some char

console.log(url.includes('tushar'));        //to check whether a string contains a specified substring and returns true or false.

const str5="Tushar-Chaudhary-01";
console.log(str5.split('-'));
