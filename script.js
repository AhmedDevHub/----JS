//? how to link Js ?
//?  Internal -- You can write JavaScript code directly inside your HTML file within the <script> tag.
/* 
<script>
document.write("This is JavaScript inside HTML.");
</script>
*/
//? External
//? In the <head> with defer:
/*
<head>
    <script src="script.js" defer></script>
</head>
*/
//? Before the closing body tag:
/*
<body>
    <h1>Hello World!</h1>
    <script src="script.js"></script>
</body>
*/
// how to display JS
// JavaScript Display Possibilities
// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

//? Data Tyeps
//? primitive data types
/* 
1.Number 
let age = 25 ; 

2.string
let firstName = "Ahmed" 

3.bolean
isStudent = true / false

4.undfined
let work ;

5.null typeOf null ==> Object Bug
empty value

6.Symbol(ES2015)
Value that is unique and cannot be changed [Not usefull Now]

7.BigInt(ES2020)
Larger integers than the Number type can hold
*/
//? nonPrimative data types
/*
Object 
Array
*/
//? how to declear Vairaibels in JavaScript
// var / let / const
/*
var : 
Function-scoped
Hoisted (initialized as undefined)
Re-declaration Allowed
Reassignment Allowed
Example:
console.log(x); // undefined (because `var` is hoisted and initialized with `undefined`)
var x = 10;
console.log(x); // 10 (value is now assigned)


let : 
Block-scoped	
Hoisted (but not initialized)
Re-declaration Not allowed	
Reassignment Allowed
Example:
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10 (now y is initialized)

const : 
Block-scoped
Hoisted (but not initialized)
Re-declaration: Not allowed	
Reassignment: Not allowed (but object/array properties can be modified)
Example:
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
console.log(z); // 20 (now z is initialized)

Temporal Dead Zone (TDZ)
The TDZ refers to the time between entering the block (scope)
where the variable is defined and the moment the variable is actually
declared and initialized. During this time,
accessing the variable results in a ReferenceError.
Example of TDZ:
{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;      // The variable `a` is now initialized, so it can be used below
  console.log(a); // 5
}
"muted" mean Reassignment vale  
*/
//? ====================================================================

//? what is the operator ?
// operator allows us to transform values or combine multiple value
//! there are many categories of operator
//? mathematical operators, comparison operators , logical operators , assignment operators and many more .

//?mathematical OP / arithmetic OP
/*
const ageAhmed = 2024 - 1999;
const ageToka = 24 + 2000;
const ageTodkaa = 200 / 10;
const ageOd = 200 % 10;
const ageTod = 200 * 10;
const hmbozoo = 200 ^ 10;
const hmbozooo = 2 ** 3;
console.log(ageAhmed, ageToka, ageTodkaa, ageOd, ageTod, hmbozoo, hmbozooo);
*/

//? Assignment operators
/* 
let x = 10 + 5 ; // 15
x += 10 ; //x = x + 10 =  25 
x*=2 ; // x = x * 2 = 50
x/=2 ; // x = x / 2 = 25 
x++ ; // x = x + 1 = 26
x-- ; // x = x - 1 = 25
console.log(x); 
*/

//? compareson operators
// > / < / <= / >=

//? type conversion
const inputYear = "1999";
//! Number is a function
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);
// console.log(String(23), 23);

//? type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("22" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);
//? Truthy and Falsy Values
//! 5 Falsy values
// 0 , '' , undefined , null , NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// const money = 0 ;
// if(money){
// console.log("don't spend it all ;");
// }else{
//   console.log("You should get a job !")
// }
// money ? console.log("don't spend it all ;") : console.log("You should get a job !");

/*
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}

height
  ? console.log("YAY! Height is defined")
  : console.log("Height is undefined");
  */
 //! Truthy values
//  console.log(Boolean('Ahmed'));
//  console.log(Boolean(13));
//  console.log(Boolean({}));
//  console.log(Boolean([]));
// let height = 1;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

//? Equality Operators == vs === vs =
//! = Assignment value 
//! == Compare value
//! === Compare Value and Type 