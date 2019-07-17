//chk String

 var chkString=(str:string) =>
{
    var newStr=str.split('');//"Marvellous";
    for(var i=0;i<newStr.length;i++)
    {
        if(newStr[i]=="Marvellous")
        {
            console.log("String contain Marvellous in it");
        }
    }
}
chkString('pune Kothrud Marvellous Infosystems');
