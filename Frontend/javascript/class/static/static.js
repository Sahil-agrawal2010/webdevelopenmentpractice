static method is used for accessing any values without creating object

class Calculate{
    static value = 0
    static cube(a){
        return a*a*a
    }
}
console.log(Calculate.value)
console.log(Calculate.cube(5))