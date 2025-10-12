fetch("https://www.apicountries.com/countries")
.then(res=>{
    return res.json()
}
).then(
    data => {
        // console.log(data[0])
        console.log("The name of the country is "+data[0].name)
        console.log("It's top level domain is "+data[0].topLevelDomain)
        console.log("It's alpha two code is "+data[0].alpha2Code)
        console.log("It's alpha three code is "+data[0].alpha3Code)
        console.log("It's country calling code is "+data[0].callingCodes)
        console.log("It's capital city is "+data[0].capital)
        console.log("it's alt spellings is "+data[0].altSpellings)
        console.log("It's is located in "+data[0].subregion)
        console.log("It's continant is "+data[0].region)
        console.log("It;s population is "+data[0].population)
        console.log("It's latitude is"+data[0].latlng[0]+"It's latitude is"+data[0].latlng[1])
        console.log("It's nick name is"+data[0].demonym)
        console.log("It's are is"+data[0].area)
        console.log("It's time zone is"+data[0].timezones)
        console.log("It's sharing his border with"+data[0].borders)
        console.log("It's native name is"+data[0].nativeName)
        console.log("It's numeric code is"+data[0].numericCode)
    }
)