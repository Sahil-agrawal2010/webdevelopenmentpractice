let principal=200
let time=2
let rate=4
let simpleInterest=(principal*time*rate)/100
console.log("The simple interest is:-"+simpleInterest)

// Areas
let length=20
let breadth=10
let radius=8
const Pi=3.1415
area=length*breadth
area1=length*length
area2=Pi*radius*radius
console.log("The area of sqyare is:-"+area)
console.log("The area of square is:-"+area1)
console.log("The area of circle is:-"+area2)


let user_input = Number(prompt("Enter any number : "))
var remainder = 0
while(user_input > 0){
    let data = user_input % 10
    remainder = remainder * 10 + data
    user_input = (user_input / 10) >> 0
}
console.log(remainder)