/*  NESTED ARRAYS (ARRAYS INSIDE ARRAYS)
*******************************************************
    * A nested array is an array that contains one or more arrays as elements.
    * It is also called a multidimensional array.
    * Elements are accessed using multiple indexes.
    * Useful for representing matrices, grids, tables, and hierarchical data.
*/
const marvel=["Ironman", "Thor", "Spiderman"];
const dc=["Superman", "Flash", "Batman"];

// # push() with Arrays :-

// marvel.push(dc);             // It push the whole dc array as single element this shows that Arrays can contain a mix of primitive values and other arrays.

// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][2]);

/* Important Notes
    * push() adds the entire array as a single element.
    * The original array is modified.
    * The result is a nested array.
*/


/* concat() :-
To combine we can use concat() instead of push()
* Combines two or more arrays.
* Returns a new array.
* Does not modify the original arrays.
* Performs a shallow copy.
*/

const allHeroes=marvel.concat(dc);
// console.log(allHeroes);


/* Spread Operator (...) :-
* Expands array elements.
* Used to merge arrays.
* Returns a new array.
* More readable than concat().
*/

const desiHeroes=["Shaktiman", "Bheem", "Yodha", "Duba Duba"];
const all=[...marvel, ...dc, ...desiHeroes, ...["CrowBeater"]];
// console.log(all);


/* flat() :-
* Flattens nested arrays.
* Returns a new array.
* Does not modify the original array.
* Depth can be specified.
* flat(Infinity) completely flattens nested arrays.
*/
const trial=[2, 3, [4,9], 1, [5, 8, [0, 12]]];
const trial1=trial.flat(Infinity);
console.log(trial1);


/* Array.isArray() :-
* Checks whether a value is an array.
* Returns true or false.
*/
console.log(Array.isArray("Tushar"));

/* Array.from() :-
* Creates a new array from an iterable or array-like object.
* Works with strings, Set, Map, etc.
*/
console.log(Array.from("Tushar"));
/* Note: An Interesting case for Array.from()
   : If given a key value pair: It returns an empty array as it doens't know which value to take as the array element! */
console.log((Array.from({name: "Sonu"})));            // Interesting case


// Array.of() :-  * Creates a new array from the given arguments.
const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1, score2, score3));
