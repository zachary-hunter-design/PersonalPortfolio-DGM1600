var name //a declared variable, but not initialzed and it's in the global scope (lame)

let foo; // a declared variable that can be changed 

//const bar; // a declared variable that cannot be changed - short for constant

const ANSWER = 42 // const is declared and initialized with the value 42
// Strings

let string1 = "Hello World!" // this a 'string literal' (prefered)

let string2 = new string1("Hello World!") // using a 'constructor'

// Number is a data type like string 

let myNum = 2098765 

let myDecimal = 73.4 // could also call this a 'float' apparently thats a CS term for a decimal 

// Boolean 

let myBool = true;

// Array 

let myArray = [] // thius is an empty array, its like a kindergarterner's cubby


let myArray2 = [42, "Bob", myBool, ANSWER, true] // zero indexed. 1=0 when counting 

let secondElement = myArray2[1]; // returns a value of bob

// Object: you can make an object of anything by assigning it key value pairs. 

let minObject = {}

const myCar = {
    make: "Toyota",
    color: "Gold",
    year: "1965", 
    vin: "j22038944087t5oljalsdihr"
};


