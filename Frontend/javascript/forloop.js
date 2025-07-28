let i
for(i = 1 ; i<=20; i=i+2){
    console.log(i)
}

for(let i=1 ; i<=10 ; i=i+1){
    console.log("Sahil Agrawal!")
}

for(let i=1;i<=17;i++){
    console.log("Pear!")
}

for(let i=1;i<=10;i++){
    console.log(i)
}

for(let i=1;i<=10;i=i+2){
    console.log(i)
}

for(let i=2;i<=20;i=i+2){
    console.log(i)
}

for(let i=20;i>=1;i=i-1){
    console.log(i)
}

for(let i=5;i<=30;i=i+5){
    console.log(i)
}

let a=Number(prompt("Enter any number :- "))
for(let i=1;i<=10;i=i+1){
    console.log(a +"X"+ i +" = "+a*i )
}

let s=0
for( i=1;i<=5;i++){
    s=s+i
}
    console.log(s)

    for(let i=1;i<=5;i++){
    console.log(i*i*i)
}

for(let i=1;i<=100000;i=i*10){
    console.log(i)
}

for(let i=1;i<=11111;i=i*10+1){
    console.log(i)
}

for(i=3;i<=33333;i=i*10+3){
    console.log(i)
}

let num=720
for(let i=6;i>=2;i=i-1){
    console.log(num)
    num=num/i
}
console.log(num)

s=1
for(i=2;i<=6;i=i+1){
    console.log(s)
    s=s*10+i
}

for(i=1;i<=10;i++)
if(i%2==0){
    console.log(-i)
}
else{
    console.log(i)
}


for(let i = 1; i<11; i++){
    if(i===4){
        continue
    }
    if(i===9){
        break
    }
    console.log(i)
}

// break  - loop bata bahira niskinxa tyo condition satisfy vayo vane

// continue - tyo particular iteration lai skip gar - aru chai chala. 


for(let i=1;i<=20;i=i+1){
    if(i%7===0){
        break
    }
    console.log(i)
}


for(let i=1;i<=20;i=i+1){
    if(i%2===0){
        continue
    }
    console.log(i)
}


let counter=0
for(let i=1;i<=30;i=i+1){
    if(i%5===0){
        counter=counter+1
    console.log(i)
    }
    if(counter>=3){
        break
    }
}


for(let i=10;i>=1;i--){
    if(i%2===0){
        continue
    }
    if(i==1){
        break
    }
        console.log(i)
}


let sentence="My name is Sahil Agrawal!"
for(let i=0;i<=sentence.length-1;i++){
if(sentence[i]==="a" || sentence[i]==="e" || sentence[i]==="i" || sentence[i]==="o" || sentence[i]==="u") {
    continue
}
if(sentence[i]==="z"){
    break
}
console.log(sentence[i])
}