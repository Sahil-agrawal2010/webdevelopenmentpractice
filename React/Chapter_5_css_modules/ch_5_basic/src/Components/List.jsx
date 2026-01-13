export function List_container(props){
   return <ol type="a">
        <li>{props.UserDetails.hobbies[0]}</li>
        <li>{props.UserDetails.hobbies[1]}</li>
        <li>{props.UserDetails.hobbies[2]}</li>
    </ol>
}