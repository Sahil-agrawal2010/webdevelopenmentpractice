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
    bithYear:prompt("Enter your Birth Year :- "),
    birthMonth:prompt("Enter your Birth Month :- "),
    birthDate:prompt("Enter your Bith Date :- "),
    age:prompt("Enter your age :- "),
    alerter: function (){
        let date=new Date()
if( this.birthMonth==date.getMonth() && this.birthDate==date.getDate()){
    return "Happy Birthday!"
}
else if(this.birthYear!=date.getFullYear() && this.birthMonth!=date.getMonth() && this.birthDate!=date.getDate()){
     return `Your age is ${this.age} so there your birthdate is at ${date.getFullYear()-this.age} ${this.birthMonth} ${this.birthDate} also Your birthday is not today!`
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
        if(this.birthMonth<date.getMonth()){
            return `There is ${this.birthMonth-date.getMonth()} month left for your birthday Month.`
        }
        else{
            return `i will ask this to sir`
        }
    }
}
console.log(counter.alerter())
console.log(`The fibonacci series till your age is ${counter.fibonacci()}`)
console.log(counter.countdown())