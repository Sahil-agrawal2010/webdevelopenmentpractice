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


// in order to take method as a variable then getter is used

// varaibles - attributes, properties, fields
// methods - functions


// class ko object jun baninxa, teslai class ko instance vanincha
