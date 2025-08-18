class Animal{ //parent
    eat(){
        console.log("All animals eat some foods.")
    }
    run(){
        console.log("Run")
    }
}

class Dog extends Animal{}

class Cat extends Animal{}


const dogOobj = new Dog()
dogOobj.eat()


const cat = new Cat()
cat.eat()


class Animal{ //parent
    eat(){
        console.log("All animals eat some foods.")
    }
    walk(){
        console.log("All animal walks.")
    }
    run(){
        console.log("")
    }
}

class Dog extends Animal{
    eat(){
        console.log("Dog eat some foods.")
    }
}



const dogOobj = new Dog()
dogOobj.eat()
dogOobj.walk()


Write a programme to creat a class animal with a method sound, creat a class dog that inherit parent class and overwrite parent mehod sound
class Animal{
    sound(){
        console.log("All naimals produce some sound!")
    }
}
class dog extends Animal{
    sound(){
        console.log("All dog produce bahu bahu sound!")
    }
}
class cat extends Animal{
    sound(){
        console.log("All cat produce mew mew sound!")
    }
}
class horse extends Animal{
    sound(){
        console.log("All horse produce mere mere sound!")
    }
}
const obj=new Animal()
obj.sound()
const obj2=new dog()
obj2.sound()
const obj3=new cat()
obj3.sound()
const obj4=new horse()
obj4.sound()


Write a programme  to creat multilevel inheritence
class Animal{
    sound(){
        console.log("All naimals produce some sound!")
    }
}
class dog extends Animal{
}
class cat extends Animal{
}
class horse extends Animal{
}
class elephant extends Animal{
}
class rhino extends Animal{
}
class hippopotamus extends Animal{
}
class ants extends Animal{
}
class bees extends Animal{
}
class grassHopper extends Animal{
}
class lizard extends Animal{
}
class tiger extends Animal{
}
const obj=new Animal()
obj.sound()
const obj2=new cat()
obj2.sound()


Write a programme to show hierarchial inherientence creat a parent class shape,creat three(3) child class circle,square,rectangle and calculate their area
class shape{
    length(){
        let l=10
        return l
    }
}
class circle extends shape{
    area(){
    let pi=3.1415
    let area=pi*(this.length()*this.length())
    console.log(area)
    }
}
class square extends shape{
    area1(){
        let area1=this.length()*this.length()
        console.log(area1)
    }
}
class rectangle extends shape{
    area2(){
        let b=5
        let area2=this.length()*b
        console.log(area2)
    }
}
obj=new circle()
obj.area()
obj1=new square()
obj1.area1()
obj2=new rectangle()
obj2.area2()



class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.name = name
        this.breed = breed
    }
    
    display(){
        console.log("The name of the animal is  : "+this.name + " and its breed is : "+this.breed)
    } 
}

const obj1 = new Dog("Django", "Husky")
obj1.displayInformation()
obj1.display()


const obj2 = new Cat("Kitty", "Xyz")
obj2.displayInformation()
obj2.display()




class A{
    displayA(){
        console.log("I am inside class A")
    }
}


class B extends A{
    displayB(){
        console.log("I am inside class B")
    }
}

class C extends A{
    displayC(){
        console.log("I am inside class C")
    }
}

// const objB = new B()
// objB.displayA()
// objB.displayB()


const obj = new C()
obj.displayA()
obj.displayB()
obj.displayC()


Super - this is a keyword in javascript which is used to access the constructor of the super class/parent class.


class Animal{
    constructor(name){
        this.name = name
    }
    displayInformation(){
        console.log("The name of the animal is : "+this.name)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.name = name
        this.breed = breed
    }
    
    display(){
        console.log("The name of the animal is  : "+this.name + " and its breed is : "+this.breed)
    } 
}

class A{
    displayinfo(){
        console.log("The name of animal is :- "+this.name)
    }
}
class B extends A{
    constructor(name,breed){
        super()
        this.name=name
        this.breed=breed
    }
    display(){
        console.log(`The name is ${this.name} and breed is ${this.breed}`)
    }
}
class C extends B{
    constructor(name,breed){
        super()
        this.name=name
        this.breed=breed
    }
    display1(){
        console.log(`The name is ${this.name} and breed is ${this.breed}`)
    }
}
obj1=new C("Dhairya","Pit bull")
obj1.displayinfo()


class A{
    display(){
        console.log("Hahahahahahah")
    }
}

class B extends A{
    display1(){
        super.display()
        console.log("Hhehehehehe")
    }
}


const obj = new B()
obj.display1()


class Bank{
    constructor(){
    this.balance = 1000
    }
    
    deposit(amt){
        this.balance+=amt
    }
    
    withdraw(amt){
        this.balance-=amt
    }
    
    total(){
        console.log("The total amount is : "+this.balance)
    }
}


const obj = new Bank()
obj.total()
obj.deposit(2000)
obj.total()
obj.withdraw(500)
obj.total()
console.log(obj.balance)

private 
console.log("Private procedure")

class Bank{
    #balance = 1000
    
    
    deposit(amt){
        this.#balance+=amt
    }
    
    withdraw(amt){
        this.#balance-=amt
    }
    
    total(){
        console.log("The total amount is : "+this.#balance)
    }
    
    #show(){
        console.log("I am private and unaccessible.")
    }
}

const obj = new Bank()
obj.total()
obj.deposit(2000)
obj.total()
obj.withdraw(500)
obj.total()
console.log(obj.balance)
obj.show()