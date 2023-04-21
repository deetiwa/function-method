// find factorial of a number

// var number = prompt("Please Enter a Number");
// var fact = 1;
// if( number == 0)
// {
//     console.log(`The Factorial of ${number} is 1`);
// }
// else if (number < 0)
// {
//     console.log(`The Factorial of negative number is not possible`);
// }
// else
// {
//     for (var i=1; i<=number; i++)
//     {
//         fact = fact * i;
//     }
//     console.log(`The Factorial of ${number} is ${fact}`);

// }

// find factorial of a number using recursion => function call itself directly or indirectly is called recursion.

var number = prompt("Enter a number");
var fact = 1;
function factr(n)
{
    if (n > number)
    {
        return ;
    }
     var temp = fact;
    fact = fact * n;
    console.log(temp +" x "+ n + " = " +fact);
    n++;
    factr(n);
}
factr(1);
console.log(`The Factorial of ${number} is ${fact}`);