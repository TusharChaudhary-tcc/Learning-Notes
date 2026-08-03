// In JavaScript, there are three ways to declare strings.

// 1. Double Quotes ("")
let str1 = "Hello World";

// 2. Single Quotes ('')
let str2 = 'Hello World';

// 3. Template Literals (Backticks ``)
let name="Tushar";
let age=18;
console.log(`My name is ${name} and My age is ${age}`);

/* String Interpolation in JavaScript
String Interpolation is the process of inserting variables or expressions directly inside a string using template literals (backticks `) and the ${} syntax.
*/

// Without String Interpolation
let name1 = "Tushar";
console.log("Hello " + name1);

// With String Interpolation
let name2="Sonu";
console.log(`Hello ${name2}`);


/* String can be created in two ways:

1. Primitive String (Recommended)
   let str = "Hello";

2. String Object
   let str = new String("Hello");

new String() creates an object, so typeof returns "object".
Prefer primitive strings because they are simpler and more efficient.
*/


let gameName=new String ("TusharCh");
console.log(gameName.__proto__);


/* What is gameName.__proto__ in JavaScript?
__proto__ is a property that gives you access to an object's prototype.

In JavaScript, every object is connected to another object called its prototype. This prototype contains properties and methods that the object can use.

*/


// Some property
console.table([
    // console.log(gameName.size()),
    console.log(gameName.length),
    console.log(gameName.toUpperCase()),
    console.log(gameName.charAt(4)),
    console.log(gameName.indexOf('a')),
    
    // const newStr=gameName.substring(0,4),
    // console.log(newStr),
    
])
 const newStr=gameName.substring(0,4);
    console.log(newStr);