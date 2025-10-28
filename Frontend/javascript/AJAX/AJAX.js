// Asynchronous Javascript And Xml:-It is used to refresh the content of the website without Refereshing.
// Incomplete Loading....

fetch(`https://68ef93b8b06cc80282966c.mockapi.io/empyee`)
.then(value=>{
    return value.json()
})
.then(result=>{
    console.log(result)
})
.catch(err=> console.log("testing error"))


fetch(`https://68ef93b8b06cc802829df66c.mockapi.io/employee`)
  .then(value => value.json())
  .then(result => console.log(result))
  .catch(err => console.log('Something went wrong:', err));
