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
      <li class="list-group-item">City : {props.studentsDetails.basic_info.education.college.location.city}</li>
      <li class="list-group-item">Province : {props.studentsDetails.basic_info.education.college.location.province}</li>
      <li class="list-group-item"> Address : {props.studentsDetails.address.history.stayed_places[0].city}</li>
      <li class="list-group-item">Stayed From : {props.studentsDetails.address.history.stayed_places[0].duration.from}</li>
      <li class="list-group-item">Stayed Till : {props.studentsDetails.address.history.stayed_places[0].duration.to}</li>
      <li class="list-group-item">City : {props.studentsDetails.address.history.stayed_places[1].city}</li>
      <li class="list-group-item">Stayed From : {props.studentsDetails.address.history.stayed_places[1].duration.from}</li>
      <li class="list-group-item">Stayed to : {props.studentsDetails.address.history.stayed_places[1].duration.to}</li>
      <li class="list-group-item">Current City : {props.studentsDetails.address.current.temporary.city}</li>
      <li class="list-group-item">Current Province : {props.studentsDetails.address.current.temporary.district}</li>
      <li class="list-group-item">Current Latitude : {props.studentsDetails.address.current.temporary.geo.lat}</li>
      <li class="list-group-item">Current City : {props.studentsDetails.address.current.permanent.city}</li>
      <li class="list-group-item">Current Province : {props.studentsDetails.address.current.permanent.province}</li>
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
