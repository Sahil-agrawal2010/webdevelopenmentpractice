for(let i = 1; i<=10; i=i+2){
    for(let j = 1; j<=5; j++){
        console.log(j)
    }
}

for (let i=1;i<=4;i=i+2){
    for (let j=1;j<=2;j=j+1){
        console.log("The value of i is "+i+" The value of j is "+j)
    }
}

for(let i=1;i<=9;i++){
    let data=""
    for(let j=1;j<=i;j=j+1){
    data=data+"1"
    }
    console.log(data)
}

for (let i=1;i<=5;i++){
    let data=""
    for(j=1;j<=i;j++){
        data=data+"*"
    }
    console.log(data)
}

for(let i=5;i>=1;i=i-1){
    let data=""
    for(let j=1;j<=i;j=j+1){
    data=data+"*"
    }
    console.log(data)
}