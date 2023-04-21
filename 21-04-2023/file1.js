// Convert celsius to fahrenheit=> Using formula---far = celsius * 1.8 +32
function convert()
{
    var c = document.getElementById('data').value;
    var f = (c*1.8)+32;
    document.getElementById('res').innerText = `${c} C=${f} F`;
}

// convert kM to Miles

function converted()
{
    var kms = document.getElementById('data').value;
    const factor = 0.62;
    var miles = kms * factor;
    document.getElementById('result').innerText =miles + 'Miles';
}
