/* JavaScript stores data in two types of memory:-

1. Stack Memory
- Used for Primitive Data Types (number, string, boolean, BigInt, null, undefined, symbol).
- Stores the actual value.
- Faster than heap memory.
- When assigned to another variable, a copy of the value is created.
*/
// example:-
let a=10;
let b=a;
b=5;
console.log(a);
console.log(b);
// Explanation: b gets a copy of a, so changing b doesn't affect a.



/* 2. Heap Memory
- Used for Non-Primitive (Reference) Data Types  (objects, arrays, functions).
- Stores objects and arrays.
- Variables store the reference (address), not the actual object.
- When assigned to another variable, both variables point to the same object.
*/
// example:-
let obj1={
    name: "Tushar"
}
let obj2=obj1;
obj2.name="Sonu";
console.log(obj1);
console.log(obj2);
// Explanation: Both obj1 and obj2 refer to the same object in heap memory.



/*
# Easy Trick to Remember
- Primitive → Stack → Copy of value 📄
- Non-Primitive → Heap → Reference (address) 📍


Q. Why are objects called reference types?
Answer: Because variables store the reference (memory address) of the object instead of the actual object. Multiple variables can refer to the same object, so changes made through one variable are visible through the others.
*/