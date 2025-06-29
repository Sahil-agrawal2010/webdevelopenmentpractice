(function (){
    console.log("My name is Ujjwal")
})()



(function (a){
    if(a == true){
        console.log("It is even.")
    }
    else{
        console.log("It's odd.")
    }
})(isEven(10))

function isEven(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}



let num1=Number(prompt(`Enter any number to check weather it is prime or not :- `))

function primeChecker(num){
    let counter=0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            counter++
        }
    }
    if(counter==2){
        return true
    }
    else{
        return false
    }
}


(function (num){
    if(num==true){
        console.log(`Yes ${num1}!It's a Prime Number!`)
    }
    else if(num==false){
        console.log(`No ${num1}!It's not a prime number!`)
    }
    else{
    console.log(`Enter the valid value!`)
}
}
)(primeChecker(num1))