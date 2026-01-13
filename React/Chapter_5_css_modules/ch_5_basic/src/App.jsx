import Button from "./Components/Button"
import Myinformation from "./Components/My_information"
import { List_container } from "./Components/List"
export default function App(){
  let My_personalInformation={
     name : 'Sahil Agrawal',
     class : 10,
     section : "A",
     address : "Birtamode , Jhapa",
     hobbies : ["Coding","Playing","Reading"]
  }
  return (
    <>
    <Myinformation UserDetails = {My_personalInformation}></Myinformation>
    <Button UserDetails = {My_personalInformation}></Button>
    <List_container UserDetails = {My_personalInformation}></List_container>
    </>
)
}