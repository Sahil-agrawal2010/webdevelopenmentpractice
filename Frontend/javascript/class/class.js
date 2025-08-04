class bike{
    constructor(Brand,Model,Price,Cc){
    this.Brand=Brand
    this.Model=Model
    this.Price=Price
    this.Cc=Cc
    }
    displayProperties(){
        console.log(`The brand of bike is ${this.Brand},The powe of the bike is ${this.Cc}.`)
    }
}
    let obj1=new bike("Hero","Dhairya","Price","Cc")
obj1.displayProperties()
    let obj2=new bike("Duggati","Dhairya","Price","120hp")
obj2.displayProperties()
    let obj3=new bike("Tvs","Dhairya","Price","150hp")
obj3.displayProperties()
    let obj4=new bike("Ktm","Dhairya","Price","569")
obj4.displayProperties()


class student{
    constructor(name,marks){
        this.name=name
        this.marks=marks
    }
    totalmarks(){
        if(this.marks>=40){
            console.log(`${this.name} is passed!`) 
        }
        else{
            console.log(`${this.name} is failed!`)
        }
    }
}
const obj1=new student("Sahil Agrawal",40)
obj1.totalmarks()
const obj2=new student("Ram Agrawal",22)
obj2.totalmarks()


class student{
    constructor(name,marks){
        this.name=name
        this.marks=marks
    }
    totalmarks(sci){
        if(this.marks>=40){
            console.log(`${this.name} is passed! And his science marks is ${sci}`) 
        }
        else{
            console.log(`${this.name} is failed!  And his science marks is ${sci}`)
        }
    }
    
    showPercentage(){
        console.log("Your percentage is : "+this.marks + " and his science marks is : "+sci)
    }
}
const obj1=new student("Sahil Agrawal",40)
obj1.totalmarks(70)
obj1.showPercentage()


class login{
    constructor(name,password){
        this.name=name
        this.password=password
    }
    checker(userName,inputPassword){
        if(userName==this.name && inputPassword==this.password){
            console.log("Login Successfully")
        }
        else{
            console.log("Sorry!Something is invalid!")
        }
    }
}
let obj1=new login("Dhairya",1234)
obj1.checker("Dhairya",1234)
let obj2=new login("Hari",14)
obj2.checker("Ram",14)


Write a programme to creat a fan class with status property on or off.To add methods turn on,turn off and get status
class fan{
    constructor(){
        this.state="OFF"
    }
    turnOn(){
        this.state="ON"
        console.log("Now the fan is ON")
    }
        turnOff(){
        this.state="OFF"
        console.log("Now the fan is OFF")
    }
        getStatus(){
            console.log(`Now the fan is ${this.state}`)
    }
}
const obj1=new fan()
obj1.getStatus()


Write a programme to creat a product class with name and price.Adda method apply ten (10) percentade discount if the price is aboue than ten (10) thousand.
class shopping{
    constructor(name,total){
        this.name=name
        this.total=total
    }
    discount(){
        if(this.total>10000){
            console.log(`Your total amount after discount is ${(this.total-(10/100)*this.total)}`)
        }
        else{
            console.log("Sorry!You got no discount")
        }
    }
}
obj1=new shopping("Sahil Agrawal",20000)
obj1.discount()
obj2=new shopping("Dhairya Agrawal",2000)
obj2.discount()


Write a programme to creat a passanger class with name and balance.There is a method buy ticket that reduce rs (fifty)50 from main balance if the main balance is less than fifty(50) don't sell.
class passanger{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    function(){
        if(this.balance>=50){
            console.log("Add to Cart!")
        }
        else{
            console.log("Sorry!You cant buy ticket!")
        }
    }
}
obj1=new passanger("Sahil Agrawal",60)
obj1.function()
obj2=new passanger("Dhairya Agrawal",40)
obj2.function()
