//Chk Armstrong

var chkArmstrong = (num:number) => 
{
    var sum=0;
    while(num>=1)
    {
      
       var digit= num%10;
       sum=sum+(digit*digit*digit);
       num=num/10;
    }
    if(sum==num)
    {
        console.log("number is Armstrong");
    }
}

chkArmstrong(153);
