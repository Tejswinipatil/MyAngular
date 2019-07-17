//Number is prime or not
function chkPrime(num) {
    var isPrime;
    if (num == 1) {
       // return false;
    }
    else if (num == 2) {
       // return true;
       // return true;
    }
    //console.log("No is prime"+num);
    for (var i = 2; i < num; i++) {
        //  console.log("test");
        if (num % i == 0) {
          //  return false;
            console.log("No is not prime");
        }
    }
    console.log("It is prime Number");
    //return true;
}
chkPrime(11);
