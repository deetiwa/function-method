// find largest number among three number => 1. using Math.max() method 2. Using user defined method

// var a = prompt("Enter First number");
// var b = prompt("Enter Second number");
// var c = prompt("Enter Thrid number");
// var x = Math.max(a,b,c);                     // using method will be given largest number
//  console.log(`${a} , ${b} , ${c} : Largest Number is ${x}`);


// Using user defined method

function check(x,y,z)
{
 if ( x>=y && x>=z )
 {
 return x;
 }
 else if ( y>=x && y>=z)
 {
    return y;
 }
 else
 {
     return z;
 }
}
var x = prompt("Enter First number");
var y = prompt("Enter Second number");
var z = prompt("Enter Thrid number");
var num = Math.max(x,y,z);

console.log(`${x} , ${y} , ${z} : Largest Number is ${num}`);
