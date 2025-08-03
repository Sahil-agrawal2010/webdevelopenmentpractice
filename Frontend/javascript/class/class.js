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