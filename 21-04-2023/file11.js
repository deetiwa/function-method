// check whether a string contains a substring =>1. string.includes() , 2.string.indexOf()

var string = prompt("Please enter a String");
var substring = "the";
var test1 = string.includes(substring);
console.log(test1);
var test2 = string.indexOf(substring);
console.log(test2);

// using function 1. charAt(), 2. toUpperCase(), 3. slice()

var a = prompt("enter a string");
console.log(a);
var a1 = a.charAt(0);
console.log(a1);
var b1 = a.slice(1);
console.log(b1);
var c1 = a.toUpperCase(a);
console.log(c1);