// print the fibonacci sequence

var a = 0;
var b = 1;

for(var i=0; i<=10; i++)
{
    var temp = a+ b;
    console.log(temp);
    a=b;
    b=temp;
}

// replace the character using replace()

var string = ("Mr. Red has a red car and red bike");

console.log(string);

var reg = new RegExp('Red', 'gi');

var newstring = string.replace(reg, 'Blue');

console.log(newstring);