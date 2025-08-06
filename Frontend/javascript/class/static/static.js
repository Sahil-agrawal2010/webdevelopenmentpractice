static method is used for accessing any values without creating object

class Calculate{
    static value = 0
    static cube(a){
        return a*a*a
    }
}
console.log(Calculate.value)
console.log(Calculate.cube(5))


class Haha{
    static count = 0
    constructor(){
        Haha.count ++
    }
    
    static getTotal(){
        console.log("The total number of users is : "+Haha.count)
    }
}

let obj1 = new Haha()
let obj2 = new Haha()
Haha.getTotal()