export function CurrentDay(){
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day= new Date().getDays().toString()
  return(
    day[days]
  )
}