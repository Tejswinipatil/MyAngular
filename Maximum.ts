// Find maximum no using max function

// var number=[23,89,6];
// var no= (Math.max(...number));
// console.log("maximum number is:",no); 

function Maximum(a,b,c)
{
    var max:number;
    max=a;
    if(max<b)
    {
        max=b;
    
    }
    if(max<c)
    {
        max=c;
    }
    console.log("Maximum value is:"+max);
}

Maximum(23,89,6);





