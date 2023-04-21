// check the number of occurrences of character in a string using loop

// var string = prompt("Please enter a string");
// var letter = prompt("please enter a letter");
// let strlen = string.length;
// alert(strlen);

// var counter = 0;
// for( let i=0; i<strlen; i++)
// {
//     if(string[i] == letter)
//     {
//         counter++;
//     }
// }console.log(`${string} => ${letter} => ${counter}`);

// check whether a string start and ends with certain characters => 1.string.startWith(), 2.string.endsWith => it will be return always true and false.

var str = prompt("Enter a string");
var teststart = str.startsWith('d');
var testend  = str.endsWith('k');
//console.log(`Start : ${teststart}, End : ${testend}`);
if(teststart == true && testend == true)
{
    console.log(`${str} : start with d and end with k`);
}
else 
{
    console.log(`${str} : start and end char not match`);
}



