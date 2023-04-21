// count vowel character using regex => 1. Expression : [aeiou], 2. Modifiers :gi

// var string = prompt("Please enter a string");
// const reg = /[aeiou]/gi;                   //g is denote globle and i is case sensitive
// var count = string.match(reg);

// console.log(count);
// console.log(count.length);


// 

var a = prompt("Enter lower number");
var b = prompt("enter upper number");


for(var i=a; i<=b; i++)
{
    var temp = i;
    

    var c = i.toString().length;
 
    var sum = 0;


    while(temp>0)
    {
       var digit = temp%10;
       temp = parseInt(temp/10);
       sum += digit ** c;
    }
    if(sum == i)
    {
        console.log(i);
    }
}
