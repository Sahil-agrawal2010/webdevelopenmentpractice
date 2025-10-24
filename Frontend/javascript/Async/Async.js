// // fetch("https://www.apicountries.com/countries")
// // .then(res=>{
// //     return res.json()
// // }
// // )
// // .then(
// //     data => {
// //         console.log(data[0])
// //         console.log("The name of the country is "+data[0].name)
// //         console.log("It's top level domain is "+data[0].topLevelDomain)
// //         console.log("It's alpha two code is "+data[0].alpha2Code)
// //         console.log("It's alpha three code is "+data[0].alpha3Code)
// //         console.log("It's country calling code is "+data[0].callingCodes)
// //         console.log("It's capital city is "+data[0].capital)
// //         console.log("it's alt spellings is "+data[0].altSpellings)
// //         console.log("It's is located in "+data[0].subregion)
// //         console.log("It's continant is "+data[0].region)
// //         console.log("It;s population is "+data[0].population)
// //         console.log("It's latitude is "+data[0].latlng[0]+"It's latitude is"+data[0].latlng[1])
// //         console.log("It's nick name is "+data[0].demonym)
// //         console.log("It's are is "+data[0].area)
// //         console.log("It's time zone is "+data[0].timezones)
// //         console.log("It's sharing his border with "+data[0].borders)
// //         console.log("It's native name is "+data[0].nativeName)
// //         console.log("It's numeric code is "+data[0].numericCode)
// //         console.log("It's curriencies is "+data[0].currencies[0].code+" It's currency is "+data[0].currencies[0].name+ " It's currency symbol is "+data[0].currencies[0].symbol)
// //         console.log("It's br is "+data[0].translations.br+" It's pt is "+data[0].translations.pt+" It's nl is "+data[0].translations.nl+" It's hr is "+data[0].translations.hr+" It's fa is "+data[0].translations.fa+" It's de is "+data[0].translations.de+" It's es is "+data[0].translations.es+" It's fr is "+data[0].translations.fr+" It's ja is "+data[0].translations.ja+" It's it is "+data[0].translations.it+"  It's hu is "+data[0].translations.hu)
// //         console.log("It's also a part of "+data[0].regionalBlocs[0].acronym+" The name of orginazation is "+data[0].regionalBlocs[0].name)
// //         console.log("It's cioc is "+data[0].cioc+" It is "+data[0].independent?" a independent country!":" not a independent country!")
// //     }
// // )
// // .then(dataa=>{
// //     console.log(dataa[156])
// //     console.log("The name of the country is "+dataa[156].name)
// //     console.log("It's top level domin is "+dataa[156].topLevelDomain)
// //         console.log("It's alpha2Code is "+dataa[156].alpha2Code)
// //         console.log("It's alpha3Code is "+dataa[156].alpha3Code)
// //         console.log("It's callingCodes is "+dataa[156].callingCodes)
// //         console.log("It's capital is "+dataa[156].capital)
// //         console.log("It's altSpellings is "+dataa[156].altSpellings)
// //         console.log("It's subregion is "+dataa[156].subregion)
// //         console.log("It's region is "+dataa[156].region)
// //         console.log("It's population is "+dataa[156].population)
// //         console.log("It's latitude is "+dataa[156].latlng[0]+" and It's longitude "+dataa[156].latlng[1])
// //         console.log("It's demonym is "+dataa[156].demonym)
// //         console.log("It's area is "+dataa[156].area)
// //         console.log("It's gini is "+dataa[156].gini)
// //         console.log("It's timezones is "+dataa[156].timezones)
// //         console.log("It's borders is "+dataa[156].borders)
// //         console.log("It's nativeName is "+dataa[156].nativeName)
// //         console.log("It's currencies code is "+dataa[156].currencies[0].code+" It's currencies name is "+dataa[156].currencies[0].name+" It's currencies symbol is "+dataa[156].currencies[0].symbol)
// //         console.log("It's languages iso639_1 is "+dataa[156].languages[0].iso639_1+" It's languages iso639_2 is "+dataa[156].languages[0].iso639_2+" It's languages name is "+dataa[156].languages[0].name+"It's languages nativeName is"+dataa[156].languages[0].nativeName)
// //         console.log("It's translations is "+dataa[156].translations.br+" It's translations is "+dataa[156].translations.pt+" It's translations is "+dataa[156].translations.nl+"It's translations is"+dataa[156].translations.hr+"It's translations is "+dataa[156].translations.fa+"It's translations is "+dataa[156].translations.de+"It's translations is "+dataa[156].translations.es+"It's translations is "+dataa[156].translations.fr+"It's translations is "+dataa[156].translations.ja+"It's translations is "+dataa[156].translations.it+"It's translations is "+dataa[156].translations.hu)
// //         console.log("It's regionalBlocs is "+dataa[156].regionalBlocs[0].acronym+" It's regionalBlocs is "+dataa[156].regionalBlocs[0].name)
// //         console.log("It's cioc is "+dataa[156].cioc+"It's a "+dataa[156].independent?"a independent country!":"not a independent country!")

// // })

// // fetch("https://68ef93b8b06cc802829df66c.mockapi.io/employee")
// // .then(res=>{
// //     return res.json()
// // })
// // .then(data=>{
// //     console.log(data)
// // })


// // fetch("https://68ef93b8b06cc802829df66c.mockapi.io/employee",{
// //     method: 'POST',
// //     headers: {'content-type':'application/json'},
// //     body: JSON.stringify({
// //         createdAt: '2082-06-29-Wednesday',
// //         name:'Mayank Bindal',
// //         number:'9800000098',
// //         id:'11'
// //     })
// // })
// // .then(res=>{
// //      res.json()
// //      return fetch("https://68ef93b8b06cc802829df66c.mockapi.io/employee")
// // })
// // .then(a=>{
// //    return a.json()
// // })
// // .then(data=>{
// //     console.log(data)
// // })









// // const prompt  = require("prompt-sync")()
// // let userInput=Number(prompt("Enter any number to display the infomation:- "))
// // fetch("https://68ef93b8b06cc802829df66c.mockapi.io/employee/"+userInput)
// // .then(resp =>{
// //     return resp.json()
// // })
// // .then(data =>{
// //     console.log(data)
// // })


// fetch("https://68ef93b8b06cc802829df66c.mockapi.io/employee",{
//     method: 'POST',
//     headers: {'content-type':'application/json'},
//     body:JSON.stringify({
//         'createdAt':'2082/07/02 Sunday',
//         'name':"Ratan Bajaj",
//         'number':'9897100000',
//         'id':'25'
//     })
// })
// .then(value=>{
//    return value.json()
// })
// .then(value1=>{
//     console.log()
// })


// fetch('https://meowfacts.herokuapp.com/').then(res => res.json()).then(data => console.log(data))



// const prompt  = require("prompt-sync")()
// let language=prompt("Enter the language:- ")
// let counts=prompt("Enter houmany data you want:- ")
// fetch(`https://meowfacts.herokuapp.com/?lang=${language}&&count=${counts}`)
// .then(data=>{
// return data.json()
// })
// .then(final=>{
// console.log(final)
// })


const prompt  = require("prompt-sync")()
let language=prompt("Enter the language:- ")
let ids=prompt("Enter which id data you want:- ")
fetch(`https://meowfacts.herokuapp.com/?lang=${language}&&id=${ids}`)
.then(data=>{
return data.json()
})
.then(final=>{
console.log(final)
})

Rough
let a=0
let b=1
for(let i=0;i<=10;i++){
    let sum=a+b
    a=b
    b=sum
    console.log(sum)
}

let number=Number(prompt("Enter any number:- "))
let counter=0
for(let i=0;i<=number;i++){
    if(number%i==0){
        counter++
    }
}
if(counter==2){
    console.log("The entered digit is a prime number.")
}
else{
    console.log("The entered digit is not a prime number")
}


let array=[1,2,3,4,5]
for(let i=5;i>=0;i--){
    console.log(array[i])
}


let userInput=Number(prompt("Enter any Number :- "))
let first=Math.floor(userInput%10)
let second=Math.floor(userInput/100)
let empty=Math.floor(userInput%100)
let third=Math.floor(empty/10)
if(first>second && first>third){
    console.log(`The greatest digit is ${first}.`)
}
if(second>first && second>third){
    console.log(`The greatest digit is ${second}.`)
}
else{
    console.log(`The greatest digit is ${third}.`)
}


let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3!==0){
        console.log(numbers[i])
    }
}


let userInput=Number(prompt("Enter any number:- "))
let last=Math.floor(userInput%10)
let first=Math.floor(userInput/1000)
let empty=Math.floor(userInput/100)
let mid1=Math.floor(empty%10)
let empty1=Math.floor(userInput/10)
let mid2=Math.floor(empty1%10)
console.log(`${last}${mid1}${mid2}${first}`)


let userInput=Number(prompt("Enter any number:- "))
let last=Math.floor(userInput%10)
let first=Math.floor(userInput/10000)
let empty=Math.floor(userInput/100)
let mid3=Math.floor(empty%10)
let empty1=Math.floor(userInput/10)
let mid4=Math.floor(empty1%10)
let empty2=Math.floor(userInput/1000)
let mid2=Math.floor(empty2%10)
console.log(`${last}${mid2}${mid3}${mid4}${first}`)


let userInput=Number(prompt("Enter any number:- "))
let last=Math.floor(userInput%10)
let first=Math.floor(userInput/10000)
let empty=Math.floor(userInput/100)
let mid3=Math.floor(empty%10)
let empty1=Math.floor(userInput/10)
let mid4=Math.floor(empty1%10)
let empty2=Math.floor(userInput/1000)
let mid2=Math.floor(empty2%10)
let decimal=(((2*2*2*2)*first)+((2*2*2)*mid2)+((2*2)*mid3)+((2)*mid4)+((1)*last))
console.log(decimal)