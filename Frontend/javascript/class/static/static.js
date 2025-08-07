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


Write a programme 1.Static method to validate phone number length
Rule: If phone number length is not 10, return "Invalid"
class number{
    static totalNumber(numberr){
        if(numberr.length===10){
            return "okkk good job"
        }
        else{
            return "Either your number is less than ten(10) or more than ten(10)!"
        }
    }
}
console.log(number.totalNumber("9852673915"))
console.log(number.totalNumber("98526739154"))


2. Static login checker without creating user
Task:
Create a class with a static method that takes username and password and returns success/fail.
class idddd{
    static user(userName,pass){
        if(userName==="admin" && pass===1234){
            return `Login sucessful!`
        }
        else{
            return `Login fail!`
        }
    }
}
console.log(idddd.user("Sahil","sahilag"))
console.log(idddd.user("admin",1234))


3. Static method to capitalize the first letter of a string
class student{
    static user(name){
        return name[0].toUpperCase()+name.slice(1)
    }
}
console.log(student.user("sahil"))


4. Generate Random 6-digit OTP using static 
class otp{
    static otps(number){
        return Math.floor(Math.random()*1000000)
    }
}
console.log(otp.otps())