//Second Largest no from array

function maximum(arr)
{
    var max=0;
    for (var i = 0; i < arr.length; i++)   
    {  
        for (var j = i + 1; j < arr.length; j++)   
        {  
            if (arr[i] > arr[j])   
            {  
                max = arr[i];  
                arr[i] = arr[j];  
                arr[j] = max;  console.log("inside j",arr)
            }
		}
console.log("inside i",arr);		
    }  
	console.log(arr);
    console.log("Second largest no in array is:"+arr[arr.length-2]);
}
var arr=[23,89,6,29,56,45,77,32];
maximum(arr);
