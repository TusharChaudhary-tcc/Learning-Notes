/* 
  What is Type Conversion?
   ~ Type conversion means changing a value from one data type to another.
*/

// 1. Number()
// Converts a value to a Number.
let score="123";
let convertedNum= Number(score);

console.log(typeof score);
console.log(typeof convertedNum + "\n");


/* Constraint: If conversion to a number fails, Number() returns NaN.
   NaN stands for "Not a Number", but typeof NaN is "number".   */
let str="37abc";
console.log(typeof str);

let convertedNum1=Number(str);
console.log(typeof convertedNum1);    
console.log(convertedNum1);           // It gives NaN :- Not a Number


/* Conversion of :
    1. "33" => 33
    2. "33abc" => NaN       // NaN  for any inavlid type like string 
    3. "Null" => 0
    4. "undefined" => NaN
    5. true => 1  ,   false => 0
*/

// 2. String()
// Converts a value to a String.
// String(123);      // "123"
// String(true);     // "true"




// 3. Boolean()
// Converts a value to a Boolean.
// Boolean(1);       // true
// Boolean(0);       // false
// Boolean("");      // false
// Boolean("JS");    // true


/*
# Truthy & Falsy Values :-

💠 Falsy Values -
  -> false
  -> 0
  -> "" (empty string)
  -> null
  -> undefined
  -> NaN

💠 Truthy Values :-
  -> Any non-zero number
  -> Any non-empty string
  -> Objects
  -> Arrays
*/