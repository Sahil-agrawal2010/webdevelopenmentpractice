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