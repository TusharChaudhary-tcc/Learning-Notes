const score=100;
// console.log(score);


const balance=new Number(400);      
// console.log(balance);

// console.log(balance.toString());               // Convert number to string

// console.log(balance.toString().length);       // As it is converted into string so we can use string property

// console.log(balance.toFixed(3));           // Fixed number of digits after decimal

const otherNum=123.894;
// console.log(otherNum.toPrecision(5));


const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// We can assign a Max or Min Value to a variable like this-   Number.MAX_VALUE, Number.MIN_VALUE
let max=Number.MAX_VALUE;
// console.log(max);

let min=Number.MIN_VALUE;
// console.log(min);




// ******************** Maths *************************
console.log(Math);

console.log(Math.abs(-5));    // Convert negative values to positive value like modulus in mathematics
console.log(Math.round(4.44));  // Round of the value
console.log(Math.ceil(4.34));  // Take upper value always
console.log(Math.floor(4.99));  // Take lower value always
console.log(Math.max(12, 3, 4, 13, 6));  // To find max element 
console.log(Math.min(12, 3, 4, 13, 6));  // To find min element 


console.log(Math.random());  // To get random value between 0 to 1
console.log((Math.random()*10)+1);  // 
console.log((Math.floor(Math.random()*10)+1));  // 

const min1=10;
const max1=20;

console.log(Math.floor(Math.random() * (max1 - min1 +1))+ min1);
