
function fibonacci(num)
{
    var no1=0;
    var no2=0;
    var no3=1;
    for(var i=0;no1<num;i++)
    {
        no1=no2;
        no2=no3;
        no3=no1+no2;
        console.log(no1);
    }
}
fibonacci(21);
