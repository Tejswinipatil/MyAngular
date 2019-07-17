//summation of array

function summation(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
         sum=sum+arr[i];
        
    }
    console.log("Sum of  no in array is:"+sum)
}
var arr=[23,6,7,4,5,7];
summation(arr);
