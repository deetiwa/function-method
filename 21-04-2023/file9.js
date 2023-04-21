// check palindrome using array method =>1. splits method, 2. reverse method 3. join .

// var string = prompt("enter a string");
// // console.log(string);
// var stringarray = string.split('');
// // console.log(stringarray);
// var stringarrayrev = stringarray.reverse();
// // console.log(stringarrayrev);
// var revstring = stringarrayrev.join('');
// // console.log(revstring);
// if (string === revstring)
// {
//     console.log(`${string} is Palindrome `);
// }
// else
// {
//     console.log(`${string} is not Palindrome `);
// }

// Using for loop

var name = prompt("enter string");
var len = name.length;
var msg = 'It is a Palindrome';
for( var i=0; i<len/2; i++)
{
    // console.log(string[i]);
    if(name[i]!=name[len-1-i])
    {
        var msg = 'it is not a palindrome';
    }
}
console.log(`${name}: ${msg}`);
