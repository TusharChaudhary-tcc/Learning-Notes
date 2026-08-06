/* ARRAYS
********************************************************

* A linear data structure that stores multiple values in a single variable
* Arrays are zero-indexed (first element is at index 0)
* Created using square brackets [] or the Array constructor
* Arrays are dynamic—they can grow or shrink in size
* JavaScript arrays can store any data type
* Elements can be numbers, strings, booleans, objects, arrays, functions, etc
* Arrays are mutable, meaning their contents can be changed after creation.
--------------------
 SHALLOW COPY
    * When an array is copied using assignment (=), only the reference is copied.
    * Both variables point to the same array in memory.
    * Changes made through one variable affect the other.
 DEEP COPY
    * A new array is created with copied elements.
    * Changes in one array do not affect the other.

    * typeof []                -> "object"
    * Array.isArray([])        -> true
    * [] == []                 -> false
    * [] === []                -> false
*/

// *****************************************************************
// ****Create an Array*****
// 1. Array Literal (Recommended)
let arr = [1, 2, 3];
// console.log(arr);

// 2. Array Constructor
let arr1=new Array(1,2,3,4,5);
// console.log(arr1);

// *****************************************************************

// Array Methods
// push() :- Adds an element to the end.
arr.push(40);
arr.push(62);
console.log("\n push() method :-" );
console.log(arr);

// pop() :- Removes the last element.
arr.pop();
console.log("\n pop() method :-" );
console.log(arr);

// unshift() :- Adds an element to the beginning.
arr.unshift(5);
console.log("\n unshift() method :-" );
console.log(arr);

// shift() :- Removes the first element.
arr.shift();
console.log("\n shift() method :-" );
console.log(arr);

// includes() :- Checks whether an element exists and return true and false.
console.log("\n includes() method :-" );
console.log(arr.includes(3));

// indexOf() :- Returns the index of an element.
console.log("\n indexOf() method :-" );
console.log(arr.indexOf(3));

// slice() :- Returns a portion of the array without modifying the original.
console.log("\n slice() method :-" );
console.log(arr.slice(1, 3));           // first index inclusive and last index exclusive

// splice(value to delete from, number of value to delete) :- Adds, removes, or replaces elements by modifying the original array.
// Syntax:- array.splice(start, deleteCount, item1, item2, ...)
// Parameters-
// * start → Index where the operation begins.
// * deleteCount → Number of elements to remove.
// * item1, item2, ... → Elements to insert (optional).
console.log("\n splice() method :-" );
console.log("Removed value - ", arr1.splice(2,1,7,8,4));
console.log("Replaced Array - ", arr1);


// concat() :- Combines two or more arrays.
let arr2 = arr1.concat(arr);
console.log("\n concat() method :-" );
console.log(arr2);

// Spread Operator (...)  :- Merges arrays
let arr3 = [...arr1, ...arr2];
console.log("\n Spread Operator(...) method :-" );
console.log(arr3);

// reverse() :- Reverses the array.
console.log("\n reverse() method :-" );
console.log(arr.reverse());

// sort() :- Sorts the array.
console.log("\n sort() method :-" );
console.log(arr3.sort());

// toString() :- Converts an array into a string.
console.log("\n toString() method :-" );
console.log(arr3.toString());

// at() :- Returns the element at a specified index (supports negative indexes).
console.log("\n at() method :-" );
console.log(arr3.at(3));
console.log(arr3.at(-1));

// join() :- Converts an array into a string.
console.log("\n join() method :-" );
console.log(arr3.join());