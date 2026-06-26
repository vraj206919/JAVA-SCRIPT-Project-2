//// Prime numbers have only two factors: 1 and the number itself.
function checkPrime(){

    let num = document.getElementById("num").value;
    let prime = true;

    if(num <= 1){
        prime = false;
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            prime = false;
            break;
        }
    }

    if(prime){
        document.getElementById("result").innerHTML = "Prime Number";
    }else{
        document.getElementById("result").innerHTML = "Not Prime Number";
    }

}