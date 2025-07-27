    console.log(Math.PI)
console.log(Math.E)

let numb1=10
let numb3=33.378
console.log(Math.round(numb3))
console.log(Math.floor(numb3))
console.log(Math.ceil(numb3))
console.log(Math.trunc(numb3))


Make a project using math object and date
const counter={
    name:prompt("Enter your name Mr/Mrs :- "),
    age:prompt("Enter your age :- "),
    alerter: function (){
        let date=new Date()
if( this.birthMonth==date.getMonth() && this.birthDate==date.getDate()){
    return "Happy Birthday!"
}
else if(this.birthYear!=date.getFullYear() && this.birthMonth!=date.getMonth() && this.birthDate!=date.getDate()){
     return `Your age is ${this.age} so there your birthdate is at ${date.getFullYear()-this.age} also Your birthday is not today!`
}
    },
    fibonacci:function (){
        let a=0
        let b=1
        let sum=0
        for(let i=1;i<=(this.age);i=i+1){
            sum=a+b
            a=b
            b=sum
        }
            return sum
    },
    countdown:function (){
        if(this.age%2==0){
            return ` Your age is in even number`
        }
        else{
            return `Your age age is in odd number!`
        }
    },
    calculator:function (){
     answer=prompt("Do you want to use a calculator :- ")
        if(answer=="y"){
                    firstNumber=prompt("Enter the first number :- "),
        secondNumber=prompt("Enter the second number :- "),
       operator=prompt("Enter the operator :- ")
        if(operator=="+"){
            return firstNumber+secondNumber
        }
         else if(operator=="-"){
            return firstNumber-secondNumber
        }
          if(operator=="*"){
            return firstNumber*secondNumber
        }
          if(operator=="/"){
            return firstNumber/secondNumber
        }
          else{
            return `Ok!`
        }
        }
},
MOnths:function(){
    birthMonth=prompt("Enter the month in which you were born in :- ")
    if(birthMonth=="1"){
        return "January"
    }
      else if(birthMonth=="2"){
        return "February"
    }
     else if(birthMonth=="3"){
        return "March"
    }
     else if(birthMonth=="4"){
        return "April"
    }
     else if(birthMonth=="5"){
        return "May"
    }
     else if(birthMonth=="6"){
        return "June"
    }  
    else if(birthMonth=="7"){
        return "July"
    }
        else if(birthMonth=="8"){
        return "Agust"
    }
        else if(birthMonth=="9"){
        return "September"
    }
        else if(birthMonth=="10"){
        return "Octuber"
    }
        else if(birthMonth=="11"){
        return "November"
    }
        else if(birthMonth=="12"){
        return "December"
    }
        else{
        return "Error"
    }
    
},
BMI:function (){
anwer2=prompt("Do you want to see your BMI :- ")
    if(anwer2=="y"){
        height=prompt("Enter your height in meters :- ")
        weight=prompt("Enter your weight in kg :- ")
        bmI=weight/(height*height)
        bmi=Math.round(bmI)
         if(bmi>0  && bmi<18.5){
       return `You are Under Weighted `
}
if(bmi>=18.5 && bmi<25){
   return `You are Healthy Weighted`
}
if(bmi>=25 && bmi<30){
     return `You are Over Weighted`
}
if(bmi>=30 && bmi<35){
    return `You are having Obesity Class I`
}
if(bmi>=35 && bmi<40){
    return `You are Obesity Class II`
}
if(bmi>=40){
    return `You are having Obesity Class III`
}
    }
},
aged:function(){
    if(counter.age>=0 && counter.age<=12){
    return "You are in your Childhood."
}
else if(counter.age>=13 && counter.age<=19){
    return "You are in your Teenage."
}
else if(counter.age>=20 && counter.age<=30){
    return "You are in your Adulthood."
}
else if(counter.age>=31 && counter.age<=60){
    return "You are in your Midage."
}
else if(counter.age>=61){
   return "You are in your Seniorage ."
}
else{
   return "Error"
}
},
countdowner:function (){
    answer3=prompt("Do you want to know how many days are left for new year :- ")
    if(answer3=="y"){
        return new Date(2026-01-01)-new Date()
    }
    else{
        return "Thank you for your visit in our programme!"
    }
}
}
console.log(counter.alerter())
console.log("")
console.log(`The fibonacci series till your age is ${counter.fibonacci()}`)
console.log("")
console.log(counter.countdown())
console.log("")
console.log(counter.countdown())
console.log("")
console.log(counter.calculator())
console.log("")
console.log(counter.MOnths())
console.log("")
console.log(counter.BMI())
console.log("")
console.log(counter.aged())
console.log("")
console.log(counter.countdowner())
console.log("")