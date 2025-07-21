const person = {
    name:"Sahil",
    age:15,
    isMarried:false,
    address:"Birtamode"
}
for(let key in person){
    console.log(key + " : " + person[key])
}


const student={
    name:"Sahil Agrawal",
    classss:10,
    section:"A",
    stop:"Onestop",
    grade:"A+",
    eyeColour:"Blue",
    hairColour:"Black",
    school:"Green Field World School"
}
for(let Keys in student){
    console.log(Keys +"+"+ student[Keys])
}


const student={
    name:"Sahil Agrawal",
    classss:10,
    section:"A",
    stop:"Onestop",
    grade:"A+",
    eyeColour:"Blue",
    hairColour:"Black",
    school:"Green Field World School"
}
let c = 0
for(let Keys in student){
    c++
}
console.log(c)
let totalProperties = Object.keys(student).length;
console.log(totalProperties);