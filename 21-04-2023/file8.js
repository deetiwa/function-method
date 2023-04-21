//check if the number have same last digit

var x = prompt("Enter First number");
var y = prompt("Enter Second number");
var z = prompt("Enter Thrid number");

var res1 = x%10;
var res2 = y%10;
var res3 = z%10;

if (res1 === res2 && res1 === res3)
{
    console.log(`${x}, ${y}, ${z} are having the same digit`);
}
else
{
    console.log(`${x}, ${y}, ${z} are not having the same digit`);
}  
