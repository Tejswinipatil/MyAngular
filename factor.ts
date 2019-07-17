//Display Factor
function displayFactor(no)
{
    var str="";
    var num;
    var half=no/2;
    for(var i=1;i<=half;i++)
    {
        if(no%i==0)
        {
            str=str+" "+i
        }
    }
    console.log("Factors of your no"+str);
}


displayFactor(20);
