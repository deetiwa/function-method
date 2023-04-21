// To Generate a random number using Math.random() method => 
// Math.random() returns a random floating-point numer ranging from 0 to less than 1.

var x = Math.random();
{
    console.log("Before Calculation :" + x );
    x = x * (10000-1)+1;
    console.log("After Calculation :" + x);
    console.log("Floor Calculation :" + Math.floor(x)); // given intiger value
}

// PRINT prime number or not

var number = prompt("Enter a Number");
if (number == 1)
{
    console.log(`${number} is niether prime nor composite number`);
}
else if(number < 1)
{
    console.log(`${number} is not a Prime number`);
}
else 
{
    for(var i=2; i< number; i++)
    {
        if(number % i == 0)
        {
            var result = (`${number} is prime number`);
            break;
        }
        else
        {
            var result = (`${number} is not a prime number`);
        }
    }
    console.log(result);
}
