// Print the table 
function table(number)
{
   for(i=1; i<=10; i++)
   {
    var res = i* number;
    console.log(`${number} x ${i} = ${res}`);
   }
}
//table(5);



for(let a = 1;a<=10;a++){
    for(let b = 1;b<=10;b++){
        console.log(a + "*" + b + " = " + a*b);
    }
}
