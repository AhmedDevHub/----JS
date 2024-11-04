//? How to link JavaScript to HTML:

//? 1. Internal Method:
// You can write JavaScript code directly inside your HTML file within the <script> tag.
// Example:
/*
<script>
document.write("This is JavaScript inside HTML.");
</script>
*/

//? 2. External Method:
// You can link an external JavaScript file using the <script> tag inside the <head> with the defer attribute to ensure HTML loads first:
 /*
<head>
    <script src="script.js" defer></script>
</head>
*/

// Or before the closing <body> tag:
 /*
<body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
</body>
*/

//? How to display JavaScript:
// JavaScript can display data in several ways:
// 1. Writing into an HTML element using innerHTML.
// 2. Writing into the HTML output using document.write().
// 3. Displaying an alert box using window.alert().
// 4. Writing into the browser console using console.log().

//? Data Types in JavaScript:

//? Primitive Data Types:
/*
1. Number:
   Example: let age = 25;

2. String:
   Example: let firstName = "Ahmed";

3. Boolean:
   Example: let isStudent = true / false;

4. Undefined:
   Example: let work; // Variable is declared but not defined.

5. Null:
   Example: let emptyValue = null; // Intentionally empty value.

6. Symbol (ES2015):
   A unique value that cannot be changed (not commonly used).

7. BigInt (ES2020):
   For integers larger than the Number type can hold.
*/

//? Non-Primitive Data Types:
/*
1. Object
2. Array
*/

//? How to declare variables in JavaScript:
// Variables can be declared using var, let, or const.
/*
var:
- Function-scoped.
- Hoisted (initialized as undefined).
- Allows re-declaration and reassignment.
Example:
console.log(x); // undefined (because var is hoisted)
var x = 10;
console.log(x); // 10

let:
- Block-scoped.
- Hoisted but not initialized.
- Does not allow re-declaration, but allows reassignment.
Example:
console.log(y); // ReferenceError (before initialization)
let y = 10;
console.log(y); // 10

const:
- Block-scoped.
- Hoisted but not initialized.
- Does not allow re-declaration or reassignment (but allows modifying objects/arrays).
Example:
console.log(z); // ReferenceError (before initialization)
const z = 20;
console.log(z); // 20

//? Temporal Dead Zone (TDZ):
The TDZ refers to the period between entering the scope where the variable is declared and the time it is initialized. During this time, accessing the variable results in a ReferenceError.
Example:
{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5; 
  console.log(a); // 5
}
*/

//? Operators in JavaScript:

// Operators allow you to manipulate or combine values.

//? Types of operators:
// Arithmetic, comparison, logical, assignment, and more.

//? Arithmetic operators:
/*
const ageAhmed = 2024 - 1999; // Subtraction
const ageToka = 24 + 2000;    // Addition
const division = 200 / 10;    // Division
const remainder = 200 % 10;   // Modulus
const multiplication = 200 * 10; // Multiplication
const power = 2 ** 3;         // Exponentiation (2 to the power of 3)
console.log(ageAhmed, ageToka, division, remainder, multiplication, power);
*/

//? Assignment operators:
/*
let x = 10 + 5; // 15
x += 10; // x = x + 10 => 25
x *= 2; // x = x * 2 => 50
x /= 2; // x = x / 2 => 25
x++; // x = x + 1 => 26
x--; // x = x - 1 => 25
console.log(x);
*/

//? Comparison operators:
// >, <, <=, >=

//? Type conversion:
/*
const inputYear = "1999";
console.log(Number(inputYear)); // Converts string to number.
console.log(inputYear + 18); // Concatenates string with number.
console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number"
console.log(String(23), 23); // Converts number to string.
*/

//? Type coercion:
/*
console.log("I am " + 23 + " years old"); // String concatenation.
console.log("23" - "10" - 3); // Subtraction converts strings to numbers.
console.log("22" / "2"); // Division converts strings to numbers.

let n = "1" + 1; // "11" (string concatenation)
n = n - 1; // 10 (subtraction converts to number)
console.log(n);
*/

//? Truthy and Falsy values:
// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}
*/

//? Equality operators (== vs === vs =):
/*
- =: Assignment.
- ==: Loose equality (compares values, ignores type).
- ===: Strict equality (compares both value and type).

Example:
const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");
*/

//? Boolean logic (AND, OR, NOT):
/*
const hasDriverLicense = true; // A
const hasGoodVision = true;    // B

console.log(hasDriverLicense && hasGoodVision); // true (AND)
console.log(hasDriverLicense || hasGoodVision); // true (OR)
console.log(!hasDriverLicense); // false (NOT)
*/
