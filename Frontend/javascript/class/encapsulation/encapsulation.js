class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    get agee(){
        return this.age
    }
}
const obj1=new person("Sahil Agrawal",15)
console.log(obj1.agee)


class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    get agee(){
        return this.age
    }
    
    display(){
        console.log("My name is : "+this.name+" and my age is : "+this.age)
    }
}
const obj1=new person("Sahil Agrawal",15)
console.log(obj1.agee) // in getter method we can access any method without using ()
console.log(obj1.name)
console.log(obj1.age)
obj1.display()


in order to take method as a variable then getter is used

varaibles - attributes, properties, fields
methods - functions


class ko object jun baninxa, teslai class ko instance vanincha


class person{
    constructor(name,age){
        this.name=name
        this._age=age
    }
    get age(){  // getter returns any values
        return this._age
    }
    
    set age(value){
        if(value>0){
            this._age = value
        }else{
            return "Age is not greater than 0"
        }
    }
}
let obj1=new person("Sahil",15)
console.log(obj1.age)

obj1.age = 20
console.log(obj1.age)


class person{
    constructor(name,age){
        this.name=name
        this._age=age
    }
    get age(){  // getter returns any values
        return this.name
    }
set age(naam){
    this.name = naam
    }
}
let obj1 = new person("Sahil",15)
console.log(obj1.age)
obj1.age  = "Nayan"
console.log(obj1.age)


class book{
    constructor(title,author,rate){
        this.title=title
        this.author=author
        this._rating=rate
    }
    get ratee(){
        return `The title of the book is ${this.title} author is ${this.author} and rating is ${this._rating}.`
    }
    set ratee(value){
        if(value<=5 && value>=0){
            this._rating=value
    }
    else{
        console.log("You are putting invalid rating!")
    }
}
}
const obj1=new book("The Alchemist","Dhairya Agrawal",2)
console.log(obj1.ratee)
obj1.ratee = -2
console.log(obj1.ratee)


Write a programme to creat a tempereature class and it stores _celcious getter  returns farahnite tempereature setter  converts it back to celcious
class temp{
    constructor(celcious){
        this.celcious=celcious
    }
    get converter(){
        return ((9/5)*this.celcious)+32
    }
    set converter(value){
        this.value=(value-32)*5/9
    }
}
let obj1=new temp(100)
console.log(obj1.converter)
obj1.value=212
console.log(obj1.celcious)


Write a programme to creat a user class with name and age. The setter should not allow age less than zero and more than hundered and getter should return user information
class user{
    constructor(name,age){
        this.name=name
        this._age=age
    }
    get total(){
        return `The name of user is ${this.name} and its age is ${this._age}`
    }
    set total(value){
        if(value<=100 && value>=0){
            this._age=value
        }
        else{
            console.log(`The age is more than hundred and less than zero!`)
        }
    }
}
const obj1=new user("Shristy Agrawal",10)
console.log(obj1.total)
obj1.total=112
console.log(obj1.total)


Write a programme to creat a bank account class with owner name and balance and getter display information and setter should not allow negative balance
class user{
    constructor(name,balance){
        this.name=name
        this._balance=balance
    }
    get total(){
        return `The name of owner is ${this.name} and balance is ${this._balance}`
    }
    set total(value){
        if(value>=0){
            this._balance=value
        }
        else{
            console.log(`The balance is in negative!`)
        }
    }
}
let obj1=new user("Sahil Agrawal",100)
console.log(obj1.total)
obj1.total=-12
console.log(obj1.total)


Write a programme to creat a class in which one password is creat and use getter to hide password and setter sets the password the password length will be more than six and less than 
class password{
    constructor(username,pass){
        this._username=username
        this._pass=pass
    }
    get passs(){
        return `The pass word is hidden for password!`
    }
    set passs(value){
        if(value.length>=6 && value.length<=12){
            this._pass=value
        }
        else{
            console.log("Your password is incorrect")
        }
    }
}
let obj1=new password("Sahil","dasdsdfdsf")
console.log(obj1.passs)
obj1.passs="ghshgiui"
console.log(obj1.passs)