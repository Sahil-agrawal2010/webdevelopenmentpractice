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


Write a programme by forming a array printing only positive number and stop if the number is greater is than 100
let number=[10,-120,30,-40,150,-60,70,-180,90,-100]
for(let i=0;i<=number.length-1;i++){
    if(number[i]<0){
        continue
    }
    if(number[i]>100){
        break
}
console.log(number[i])
}


Write a programme to make a array of 1 and 50 skip odd number and if the array is divisible by 4 and 6 stop it
let number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,50]
for(let i=0;i<=number.length-1;i=i+1){
    if(number[i]%2!=0){
        continue
    }
    if(number[i]%4===0 && number[i]%6===0){
        break
    }
    console.log(number[i])
}