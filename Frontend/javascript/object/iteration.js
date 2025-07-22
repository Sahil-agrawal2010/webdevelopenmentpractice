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


Write a programme to add 1000 in salary of all the people in object
const salary={
    Ram:4000,
    Shyam:5000,
    Hari:6000,
    Krishna:7000,
    Lakxam:8000,
    Shiv:9000,
    Ganesh:10000,
    Hanuman:11000,
}
        for(let Keys in salary){
            console.log(salary[Keys]+1000)
}


Write a programme to print only  the object with string values
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
    if(typeof(student[Keys])=="string"){
        console.log(student[Keys])
    }
}


const checker={
    isMarried:false,
    isSold:true,
    isGood:false,
    isBad:true,
    isFantastic:false,
    isAmazing:true
}
let counter = 0
for(let keys in checker){
    if(typeof(checker[keys] == 'boolean')){
        counter ++
    }
}
    console.log(counter)


    const checker={
    isMarried:false,
    isSold:true,
    isGood:false,
    isBad:true,
    isFantastic:false,
    isAmazing:true
}
for(let keys in checker){
    console.log(`${keys.toUpperCase()} : ${checker[keys]}`)
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
for (let keys in student){
    if(typeof(student[keys])=="number"){
        console.log(student[keys])
    }
}


const student={
    name:null,
    classss:10,
    section:undefined,
    stop:null,
    grade:undefined,
    eyeColour:null,
    hairColour:undefined,
    school:null
}
for (let keys in student){
    if(student[keys]==null||student[keys]==undefined){
        console.log(student[keys])
    }
}