// export default function ErrorMessage(props){
//    return (

//        (props.sahil).length===0 && <h2>Sorry there are no vegetables found</h2>
//    )
// }

export default function ErrorMessage(props) {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <h2>Name : {props.studentsDetails.basic_info.personal.name}</h2>
      </li>
      <li class="list-group-item">
        <p>Age : {props.studentsDetails.basic_info.personal.age}</p>
      </li>
      <li class="list-group-item">Education Level : {props.studentsDetails.basic_info.education.level}</li>
      <li class="list-group-item">Education faculty : {props.studentsDetails.basic_info.education.faculty}</li>
      <li class="list-group-item">Name Of Collage : {props.studentsDetails.basic_info.education.college.name}</li>
      <li class="list-group-item">Name Of University : {props.studentsDetails.basic_info.education.college.university}</li>
      <li class="list-group-item">City : {props.studentsDetails.basic_info.education.location.city}</li>
      {/* <li class="list-group-item">Province : {props.studentsDetails.basic_info.education.location.province}</li> */}
      {/* <li class="list-group-item">Address : {props.address.history.stayed_places[0].city}</li>
      <li class="list-group-item">Stayed From : {props.address.history.stayed_places[0].duration.from}</li>
      <li class="list-group-item">Stayed Till : {props.address.history.stayed_places[0].duration.to}</li> */}
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
    </ul>
  );
}
