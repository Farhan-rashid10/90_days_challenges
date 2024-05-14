// Arrow functions (also called lambda functions) were introduced in ES6 (ECMAScript 2015) and offer a concise and alternative way to define functions co

//basic syntax

const myFunction = (parameter1, parameter2) => {
    // Function body
    return value;
  };
 // Explanation:

//   const myFunction declares a constant variable named myFunction to hold the function.
//   (parameter1, parameter2) defines the function's parameters, similar to traditional functions. You can have zero or more parameters.
//   => is the arrow symbol, signifying the start of the function body.
//   { // Function body } represents the code block that executes when the function is called.
//   return value; (optional) returns a value from the function. If no return statement is present, the function implicitly returns undefined.

// example 1
const add = (x, y) => x + y;

const result = add(5, 3); // result will be 8


// example 2 
