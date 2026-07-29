// To treat all JS code as new version but nowadays it automtically treat all code as new version
"use strict";


// alert(3+3) // we are using node.js, not browser and this works on browser


/* There are 2 types of Datatypes in JS :-
  # Primitive:
    1. Number- Stores integers and decimal numbers
    2. String- Stores text (inside " ", ' ', or ` `)
    3. Boolean- Stores only two values: true or false
    4. Undefined- A variable is declared but not assigned a value.
    5. Null- Represents an intentional empty value.
    6. BigInt- Stores very large integers.
    7. Symbol- Stores unique and immutable values

  # Non-Primitive:
    Object (Array, Date, Function, etc.) 
*/

// Array Example
const heroes=["Shaktiman", "naagraj", "doga"];
console.log(heroes);

// Object Example
let myObj={
  name:"Tushar",
  age: 18
}
console.log(myObj);

// Function Example
const myFunc=function(){
  console.log("Hello World");
}
myFunc();



// typeof Null is "object"

// typeof Operator - Used to check the data type of a value.
// console.log(typeof 10);             // number
// console.log(typeof "Tushar");       // string
// console.log(typeof null);              // object
// console.log(typeof undefined);         // undefined
let num=32425452545432324355n;
console.log(typeof num);                  // bigint

let s1=Symbol("142");
let s2=Symbol("142");
console.log(typeof s1);
console.log(s1==s2);
// Even though both symbols have the same description ("142"), they are different and unique.



// console.log(typeof heroes);              // typeof array is object
// console.log(typeof myObj);               // typeof object is object
// console.log(typeof myFunc);              // typeof function is function







// console.table([typeof 18, typeof "Tushar", typeof null, typeof undefined]);




/* For more study use these docs
-> Mdn docs-  https://developer.mozilla.org/en-US/docs/Web/JavaScript
-> ECMAscript-  https://tc39.es/ecma262/
*/