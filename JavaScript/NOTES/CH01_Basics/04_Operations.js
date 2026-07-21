let a=22;
let b=7;

// console.log(a+b);          
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);     // (a to the power of b) like acts as a^b


// To add (concatenate) two or more strings.

let str1="Tushar";
let str2="Chaudhary";

let str3= str1 +" "+ str2;
// console.log(str3);

console.log("\n");


console.log("1" + 2);              // Output:-12
console.log(1 + "2");              // Output:-12
console.log("1" + "2");            // Output:-12
console.log("1" + 2 + 2);          // Output:- 122     // If string present in first so the after all values treated as string.
console.log(1 + 2 + "4");          // Output:- 34      // If string present in last so the before all values treated as number.

console.log("\n");



// Prefix and Suffix
let counter=100;
console.log(counter++);    // Post increment : Firstly print the value and then increase that
console.log(++counter);    // Pre increment : Firstly increase the value and then print that



console.log("2"==2);       // when we compare string with number it automatically convert string to number


console.log(null>0);       // false
console.log(null==0);      // false
console.log(null>=0);      // true
console.log(null<=0);      // true

console.log(undefined>0);       //Always false when compare with undefined
console.log(undefined<0);
console.log(undefined==0);



// strict check :- 
// -> === compares both value and data type.
// -> Returns true only if both are the same.
// -> No type conversion (type coercion) is performed.

console.log(10 === "10")     // false;

