// Javascript Program to check if a number is positive, negative or zero
// using math.sign() method  and other type using user define

// function check()
// {
//     var value = document.getElementById('data').value;
//     var res = Math.sign(value);
//     document.getElementById('res').innerText = res;

// }


function check()
{
    var value = document.getElementById('data').value;
    

    if(value > 0)
    {
        answer = `${value} is Positive Number`;
        
    }
    else if(value < 0)
    {
        answer = `${value} is Negative Number`;
    }
    else if(value == 0)
    {
        answer = `${value} is Zero`;
    }
    else
    {
        answer = `${value} Not a Number`;
    }
    document.getElementById('answer').innerText = answer;
}