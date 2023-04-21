// calculator using switch case 

var a = prompt("Please enter 1st num");
var b = prompt("please enter 2nd num");
var opr = prompt("Please select among +,-,*,/");

switch (opr)
{
    case "+":
        var res = parseFloat(a) + parseFloat(b);
        console.log(`${a} + ${b} = ${res}`);
        break;

        case "-":
        var res = parseFloat(a) - parseFloat(b);
        console.log(`${a} - ${b} = ${res}`);
        break;

        case "*":
        var res = parseFloat(a) * parseFloat(b);
        console.log(`${a} * ${b} = ${res}`);
        break;

        case "/":
        var res = parseFloat(a) / parseFloat(b);
        console.log(`${a} / ${b} = ${res}`);
        break;


        default:
            console.log('invalid operater');

}
alert("hello");