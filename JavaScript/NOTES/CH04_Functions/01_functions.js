// Today we are studying:
// 1. Default parameters
// 2. Rest parameters
// 3. Function expressions
// 4. Arrow functions
// 5. Scope
// 6. Callback functions
// 7. Hoisting


// ============================================================
// 1. Default parameters
// ============================================================
// A default parameter is used when an argument is not provided.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Tushar")); // Hello, Tushar!
console.log(greet());         // Hello, Guest!

// The default value is also used when the argument is undefined.
console.log(greet(undefined)); // Hello, Guest!


// ============================================================
// 2. Rest parameters
// ============================================================
// The rest parameter (...) collects multiple arguments into an array.
// It must always be the last parameter.
function addAll(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addAll(1, 2, 3));       // 6
console.log(addAll(10, 20, 30, 40)); // 100

// A normal parameter can come before the rest parameter.
function showScores(student, ...scores) {
    return `${student} scored: ${scores.join(", ")}`;
}

console.log(showScores("Tushar", 80, 90, 85));


// ============================================================
// 3. Function expressions
// ============================================================
// A function expression is a function stored in a variable.
// The semicolon belongs to the assignment.
const multiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

console.log(multiply(4, 5)); // 20

// Unlike a function declaration, a function expression cannot be
// called before the line where it is assigned.


// ============================================================
// 4. Arrow functions
// ============================================================
// An arrow function is a shorter way to write a function expression.
const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

console.log(subtract(10, 4)); // 6

// If there is only one parameter, parentheses are optional.
const square = number => {
    return number * number;
};

console.log(square(5)); // 25

// If the function has only one expression, braces and return are optional.
const cube = number => number * number * number;

console.log(cube(3)); // 27

// For zero or two or more parameters, parentheses are required.
const sayHello = () => "Hello!";
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

console.log(sayHello());
console.log(divide(10, 2)); // 5


// In short:
// - Default parameter: function greet(name = "Guest") {}
// - Rest parameter: function addAll(...numbers) {}
// - Function expression: const add = function (a, b) {}
// - Arrow function: const add = (a, b) => a + b


// ============================================================
// 5. Scope
// ============================================================
// Scope decides where a variable can be accessed.

// Global scope: available throughout this file.
const courseName = "JavaScript";

function showCourse() {
    // Function scope: available only inside this function.
    const lessonName = "Functions";

    console.log(courseName); // Outer variables can be read inside.
    console.log(lessonName);
}

showCourse();
// console.log(lessonName); // Error: lessonName is not available here.

// Block scope: let and const exist only inside the nearest { } block.
if (true) {
    const message = "This is inside the block";
    console.log(message);
}
// console.log(message); // Error: message is not available here.

// Lexical scope means an inner function can access variables from
// the scope where it was created.
function outerFunction() {
    const outerMessage = "Message from outer function";

    function innerFunction() {
        console.log(outerMessage);
    }

    innerFunction();
}

outerFunction();


// ============================================================
// 6. Callback functions
// ============================================================
// A callback is a function passed to another function as an argument.
function calculate(number, operation) {
    return operation(number);
}

const doubledNumber = calculate(8, number => number * 2);
const squaredNumber = calculate(5, number => number * number);

console.log(doubledNumber); // 16
console.log(squaredNumber); // 25

// Array methods also commonly use callback functions.
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

// The callback is not called while it is being passed.
// The receiving function decides when and how often to call it.


// ============================================================
// 7. Hoisting
// ============================================================
// Before executing code, JavaScript prepares declarations.
// This behavior is called hoisting.

// Function declarations are hoisted, so this works:
console.log(hoistedGreeting()); // Hello from a hoisted function

function hoistedGreeting() {
    return "Hello from a hoisted function";
}

// var declarations are hoisted with the value undefined.
console.log(varMessage); // undefined
var varMessage = "Now varMessage has a value";
console.log(varMessage);

// let and const are hoisted but stay in the Temporal Dead Zone (TDZ)
// until their declaration is reached. Accessing them before declaration
// causes a ReferenceError.
// console.log(letMessage); // ReferenceError
let letMessage = "let is now initialized";

// Function expressions and arrow functions are not callable before
// their variable declaration is initialized.
// console.log(notReadyFunction()); // ReferenceError
const notReadyFunction = function () {
    return "Ready now";
};

// Important hoisting rule:
// - Function declaration: callable before its definition.
// - var: hoisted with the value undefined.
// - let and const: hoisted, but unavailable before initialization.
// - Function expressions and arrow functions: use let/const behavior.
