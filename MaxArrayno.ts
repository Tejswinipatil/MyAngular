//Largest no fro array

function maximum(arr)
{
    var max=0;
    for(var i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    console.log("Maximum no in array is:"+max)
}
var arr=[23,89,6,29,56,45,77,32];
maximum(arr);
