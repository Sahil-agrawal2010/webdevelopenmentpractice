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
for(let keys in student){
    if(typeof(student[keys])=="string" && student[keys].length>4){
        console.log(`${keys} : ${student[keys]}`)
    }
}


Write a programme to find the number which has the highest numeric value
const salary={
    Ram:4000,
    Shyam:5000,
    greatest: function () {
        if(salary.Ram>salary.Shyam){
            return salary.Ram
        }
        else{
            return salary.Shyam
        }
    }
}
console.log(salary.greatest())


Write a programme to count how many values are exactly true
    const checker={
    isMarried:false,
    isSold:true,
    isGood:false,
    isBad:true,
    isFantastic:false,
    isAmazing:true
}
let t=0
for (let keys in checker){
    if(checker[keys]==true){
        t=t+1
    }
}
console.log(t)


Write a programme to add the sum of all numeric values only
const salary={
    Ram:4000,
    Shyam:5000,
    Hari:6000,
    Krishna:7000,
    total:function (){
        sum=this.Ram+this.Shyam+this.Hari+this.Krishna
        return sum
    }
}
console.log(salary.total())


Write a programme to print only string whose value starts with s
const student={
    name:"Sahil Agrawal",
    section:"A",
    stop:"SOnestop",
    grade:"A+",
    eyeColour:"Blue",
    hairColour:"Black",
    school:"Green Field World School"
}
for(let keys in student){
    if(student[keys].startsWith("S")){
        console.log(student[keys])
    }
}


Write a programme to creat a copy of all keys and values in to another object
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
const student2={
    
}
for(let keys in student){
    student2[keys]=student[keys]
}
alert(student2)

Write a programme to print only string values to your name
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
for(let keys in student){
    if(typeof(student[keys])==="string"){
        student[keys] = "Sahil agrawal"
    }
}
console.log(student)


const student={
    name:"Sahil Agrawal",
    age:10,
    section:"A",
    stop:"Onestop",
    grade:"A+",
    eyeColour:"Blue",
    hairColour:"Black",
    school:"Green Field World School"
}
    let counter = 0
for(let keys in student){
    if(keys.startsWith("a") || keys.startsWith("A") || keys.startsWith("E") || keys.startsWith("I") || keys.startsWith("O") || keys.startsWith("U")
    ){
    console.log(keys)
    counter++
    }
}

console.log("There are "+counter+ " keys with vowel on the beginning.")


const student = {
    name: "Sahil Agrawal",
    age: 10,
    section: "A",
    stop: "Onestop",
    grade: "A+",
    eyeColour: "Blue",
    hairColour: "Black",
    school: "Green Field World School"
}
let counter = 0
for (let key in student) {
    if (typeof(student[key]) === "string") {
        counter++
    }
}
console.log(`There are ${counter} values with string and ${(Object.keys(student).length)} keys .`)


const salary={
    Ram:4000,
    Shyam:5000,
    name:"Sahil agrawal",
    addresses:"Onestop",
    Ganesh:10000,
    Hanuman:11000,
}
salary2={
    
}
for(let key in salary){
    if(typeof(salary[key])=="number"){
    salary2[key]=salary[key]
    }
}
console.log(salary2)


const student = {
    name: "Sahil Agrawal",
    age: 10,
    section: "A",
    stop: "Onestop",
    grade: "A+",
    school: "Green Field World School",
    isGood:false,
    isBad:true,
    isFantastic:false,
    isAmazing:true,
    eyeColour:null,
    hairColour:undefined
}
student2={
    
}
for(let key in student){
    student2[key] = typeof(student[key])
}
alert(student2)


Write a programme to count how many keys starts with capital letter

const student = {
    Name: "Sahil Agrawal",
    age: 10,
    section: "A",
    stop: "Onestop",
    grade: "A+",
    school: "Green Field World School",
    isGood:false,
    isBad:true,
    isFantastic:false,
    isAmazing:true,
    EyeColour:null,
    hairColour:undefined
}
let c = 0
for(let key in student){
    if(key.charCodeAt(0)>=65 && key.charCodeAt(0)<=90){
        c = c+ 1
    }
}
alert("The total number of keys with capital letter are : "+c)


Write a programme to add only even number values from the object
const salary={
    Ram:4000,
    Shyam:5000,
    Hari:6000,
    Krishna:7000,
    Lakxam:8000,
    Shiv:9000,
    Ganesh:10009,
    Hanuman:11000
}
let sum=0
for(key in salary){
    if(salary[key]%2==0){
        sum=sum+salary[key]
    }
}
console.log(sum)