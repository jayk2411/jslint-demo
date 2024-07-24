
// 1. code with error for jslint
function sayHello(name) {
    if(name)
    console.log("Hello, " + name);
}

sayHello("World")


///////////////////////////////////////////////////////////////////////////////////

//2. code with no error for jslint
// 'use strict'; // Enforces strict mode
// function sayHello(name) {
//     if (name) {
//         console.log("Hello, " + name);
//     }
// }

// sayHello("World");


/////////////////////////////////////////////////////////////////////

//3. with big content
// 'use strict'; // Enforce strict mode for better error-checking

// // Function to greet a user
// function sayHello(name) {
//     if (name) {
//         console.log("Hello, " + name);
//     } else {
//         console.log("Hello, stranger!");
//     }
// }

// sayHello("World");

// // Example of a function with potential issues
// function calculateArea(radius) {
//     // Missing 'var', 'let', or 'const' for variable declaration
//     var pi = 3.14159;
//     if (radius <= 0) {
//         return 0;
//     }
//     return pi * radius * radius;
// }

// console.log("Area: " + calculateArea(5));

// // Example of a for loop with an off-by-one error
// function countToTen() {
//     for (let i = 1; i <= 10; i++) { // Off-by-one error
//         console.log(i);
//     }
// }

// countToTen();

// // Example of using global variables
// var globalVar = "I'm a global variable";

// function useGlobalVar() {
//     console.log(globalVar); // Potential global variable misuse
// }

// useGlobalVar();

// // Example of a function with unused parameters
// function unusedParameters(a, b, c) {
//     return a + b;
// }

// console.log("Sum: " + unusedParameters(2, 3, 4));

// // Example of nested functions with incorrect scoping
// function outerFunction() {
//     var outerVar = "I'm an outer variable";

//     function innerFunction() {
//         var innerVar = "I'm an inner variable";
//         console.log(outerVar); // Accessing outer scope variable
//     }

//     console.log(innerVar); // Error: innerVar is not defined
//     innerFunction();
// }

// outerFunction();

// // Example of an anonymous function assigned to a variable
// var anonymousFunction = function() {
//     console.log("This is an anonymous function");
// };

// anonymousFunction();

// // Example of a function with a missing semicolon
// function missingSemicolon() {
//     console.log("This line is missing a semicolon")
// }

// missingSemicolon()

// // Example of inconsistent naming conventions
// function inconsistentNaming() {
//     var user_name = "John"; // Snake_case instead of camelCase
//     var UserAge = 30; // PascalCase instead of camelCase
//     console.log("User: " + user_name + ", Age: " + UserAge);
// }

// inconsistentNaming();



// 'use strict'; // Enforce strict mode for better error-checking

// // Function to greet a user
// function sayHello(name) {
//     if (name) {
//         console.log("Hello, " + name);
//     } else {
//         console.log("Hello, stranger!");
//     }
// }

// sayHello("World");

// // Example of a function with proper variable declaration
// function calculateArea(radius) {
//     var pi = 3.14159; // Use 'var' for compatibility
//     if (radius <= 0) {
//         return 0;
//     }
//     return pi * radius * radius;
// }

// console.log("Area: " + calculateArea(5));

// // Corrected for loop to avoid using '++'
// function countToTen() {
//     var i; // Declare 'i' outside of the loop for ES5 compatibility
//     for (i = 1; i <= 10; i += 1) { // Use 'i += 1' instead of 'i++'
//         console.log(i);
//     }
// }

// countToTen();

// // Avoid using global variables unnecessarily
// function useLocalVar() {
//     var localVar = "I'm a local variable"; // Use 'var' for compatibility
//     console.log(localVar); 
// }

// useLocalVar();

// // Example of a function with used parameters
// function addNumbers(a, b, c) {
//     return a + b + c; // Utilize all parameters to avoid unused warnings
// }

// console.log("Sum: " + addNumbers(2, 3, 4));

// // Correct scoping and avoid referencing undefined variables
// function outerFunction() {
//     var outerVar = "I'm an outer variable"; // Use 'var' for compatibility

//     function innerFunction() {
//         var innerVar = "I'm an inner variable"; // Use 'var' for compatibility
//         console.log(outerVar); // Accessing outer scope variable
//         console.log(innerVar); // Correctly using inner scope variable
//     }

//     innerFunction(); // Ensure function calls are correctly scoped
// }

// outerFunction();

// // Example of an anonymous function with correct formatting
// var anonymousFunction = function() { // Use 'var' for compatibility
//     console.log("This is an anonymous function");
// };

// anonymousFunction();

// // Example of a function with a fixed missing semicolon
// function properlyFormattedFunction() {
//     console.log("This line has a semicolon");
// }

// properlyFormattedFunction();

// // Example of consistent naming conventions
// function consistentNaming() {
//     var userName = "John", userAge = 30; // Declare 'userName' first // Continue with the same 'var' statement
//     console.log("User: " + userName + ", Age: " + userAge);
// }

// consistentNaming();
