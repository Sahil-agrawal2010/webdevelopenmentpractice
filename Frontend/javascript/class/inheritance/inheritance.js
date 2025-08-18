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