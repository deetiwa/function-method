// reverse the string using for loop

var string = prompt("please enter a string");

// var strlen = string.length;

// var revstr = '';

// // console.log(string);
// // console.log(string[strlen-2]);

// for (var i = strlen-1; i>=0; i--)
// {
//     // console.log(string[i]);
//     revstr += string[i];
// }
// console.log(`String is ${string} after reverse is ${revstr}`);


// split('') to split the string into array an other is sort() alphabetical orders

console.log(string);

var str = string.split(' '); // without space single letter stored if given space each word consider element.

console.log(str);

var arr = str.sort();

console.log(arr);

console.log(arr.join(' '));

