export function Currentdate(){
    let date=new Date()
    let am_pm=(((date.getHours()) <12)?"Am":"Pm")
    return <p>{date.getHours() %12 || 12}:{date.getMinutes()}:{date.getSeconds() }{am_pm}</p> 
}

