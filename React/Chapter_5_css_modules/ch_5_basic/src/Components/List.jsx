export function List_container(props){
   return <ol type="a">
        <li className="First_hobby">{props.UserDetails.hobbies[0]}</li>
        <li className="Second_hobby">{props.UserDetails.hobbies[1]}</li>
        <li className="Third_hobby">{props.UserDetails.hobbies[2]}</li>
    </ol>
}