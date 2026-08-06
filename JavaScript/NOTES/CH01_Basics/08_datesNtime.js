/*
 The Date object is used to work with dates and times in JavaScript.
 The Date object has been part of JavaScript since the language was created in 1995 by Brendan Eich.
 Internally, JavaScript stores a date as the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (Unix Epoch).

## Problems with the Date Object
-> Months start from 0 (January = 0).
-> Parsing date strings can be inconsistent.
-> Working with different time zones is difficult.
-> Date calculations (adding days, months, years) are error-prone.
-> The Date object is mutable, meaning its value can be changed after creation.
Example: 
    let d = new Date();
    d.setFullYear(2030);                 // Original object is modified

## Temporal → Modern, immutable API for dates and times.
   Temporal was created to replace many shortcomings of the old Date API.
   like - Temporal objects are immutable, meaning they cannot be modified after creation.

Date.now() → Milliseconds since the Unix Epoch.
*/

// ***** Create a Date ******

// # Current Date & Time

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

console.log("\n Type of Date : " + typeof myDate);           // Object

// # Specific Date
let date = new Date("2026-08-06");
// console.log(date);

// # Using Year, Month, Day
let date1 = new Date(2026, 7, 6);
// console.log(date1);
// Note: Month starts from 0 (January = 0, August = 7).

// Date constructor Format :- (YYYY, MM , DD) or (YYYY, MM , DD, HH, MM, SS, MS)

let myCreatedDate=new Date(2024, 0, 12, 12,20);     // last two numbers are time
// console.log(myCreatedDate1.toLocaleString());


// console.log(Date.now());      // Returns milliseconds since January 1, 1970 (UTC).


// ******* Common Methods *******

date.getDate();                // Returns day of the month (1–31).
date.getDay();                 // Returns ady of the week (0-Sunday .... 6-Saturday)
date.getMonth();               // Returns month (0–11).
date.getFullYear();            // 2026
date.getHours();               // Returns 0–23.
date.getMinutes();             
date.getSeconds();
date.getMilliseconds();        // Returns the milliseconds (from 0-999)

console.log("Time - " + date.getTime());


date.toString();              // Convert Date to String
date.toDateString();          // Date Only
date.toTimeString();          // Time Only
date.toLocaleDateString();    // Local Date like- 6/8/2026
date.toLocaleTimeString();    // Local Time like- 5:30:00 am
date.toLocaleString();        // Local Date & Time like- 6/8/2026, 5:30:00 am


// Set Methods                // Original object is modified
date.setDate(15);
date.setMonth(11);
date.setFullYear(2030);
date.setHours(10);
date.setMinutes(30);


// ## Conversion of Time
console.log(Math.floor(Date.now()/1000));               // Convert milliseconds to seconds
// Note: Always do conversion in milliseconds.




// Difference between .getTime()  and Date.now()
/*
## getTime():-
-> always returns the number of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC), no matter whether the date is in the past, present, or future.
-> Requires a Date object
-> Example:
let myCreatedDate1=new Date("01-04-2023");
console.log(myCreatedDate1.getTime());

## Date.now():-
Returns the current timestamp.
*/



// toLocaleString() :- This method formats a date and time according to a specific locale and options.
// This method is special becoz we customize the format of date and time as we want 
let date2=new Date();
console.log(date2.toLocaleString('default',{
    weekday: "long",
    year: "2-digit",
    day: 'numeric',
}))

/*
| Property   | Example Values                   |
| ---------- | -------------------------------- |
| `weekday`  | `"long"`, `"short"`              |
| `year`     | `"numeric"`, `"2-digit"`         |
| `month`    | `"numeric"`, `"long"`, `"short"` |
| `day`      | `"numeric"`, `"2-digit"`         |
| `hour`     | `"numeric"`, `"2-digit"`         |
| `minute`   | `"numeric"`, `"2-digit"`         |
| `second`   | `"numeric"`, `"2-digit"`         |
| `hour12`   | `true`, `false`                  |
| `timeZone` | `"Asia/Kolkata"`, `"UTC"`        |
*/