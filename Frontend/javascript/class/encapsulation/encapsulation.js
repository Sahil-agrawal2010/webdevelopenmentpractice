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
