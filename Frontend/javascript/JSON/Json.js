Java Script Object Notation
// API data - JSON - String format, Object format 

// Object - String - stringify
// String - object - parse


let Json={
    name:"Sahil",
    lastName:"Agrwal",
    grade:10,
    favouriteNumber:[10,14,18,22],
    address:{
        country:"Nepal",
        city:"Birtamode"
    }
}
console.log(typeof(Json))
let Json2=JSON.stringify(Json)
console.log(typeof(Json2))
console.log(Json2)
console.log(JSON.parse(Json2))


let data = '{"name":"Sahil", "lastName":"Agrwal"}'
   
console.log(typeof(data)) 
console.log(data)



let newData = JSON.parse(data)
console.log(typeof(newData))
console.log(newData)

let secondData = JSON.stringify(newData)
console.log(typeof(secondData))



let data1 = `[
    {"name": "Nayan Pathak", "address" : "Birtamode"},
    {"name": "Dhiarya Agrawal", "address" : "India"},
    {"name": "SahiL Agrawal", "address" : "Illam"},
    {"name": "Sita Thapa", "address" : "Kathmandu"}]`
    
let secondData = JSON.parse(data1)
console.log(typeof(secondData))
console.log(secondData)
console.log(secondData[3].name)