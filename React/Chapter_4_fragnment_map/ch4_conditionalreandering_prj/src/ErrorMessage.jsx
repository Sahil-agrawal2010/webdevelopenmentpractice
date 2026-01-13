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
      <li class="list-group-item">
        Education Level : {props.studentsDetails.basic_info.education.level}
      </li>
      <li class="list-group-item">
        Education faculty : {props.studentsDetails.basic_info.education.faculty}
      </li>
      <li class="list-group-item">
        Name Of Collage :{" "}
        {props.studentsDetails.basic_info.education.college.name}
      </li>
      <li class="list-group-item">
        Name Of University :{" "}
        {props.studentsDetails.basic_info.education.college.university}
      </li>
      <li class="list-group-item">
        City :{" "}
        {props.studentsDetails.basic_info.education.college.location.city}
      </li>
      <li class="list-group-item">
        Province :{" "}
        {props.studentsDetails.basic_info.education.college.location.province}
      </li>
      <li class="list-group-item">
        {" "}
        Address : {props.studentsDetails.address.history.stayed_places[0].city}
      </li>
      <li class="list-group-item">
        Stayed From :{" "}
        {props.studentsDetails.address.history.stayed_places[0].duration.from}
      </li>
      <li class="list-group-item">
        Stayed Till :{" "}
        {props.studentsDetails.address.history.stayed_places[0].duration.to}
      </li>
      <li class="list-group-item">
        City : {props.studentsDetails.address.history.stayed_places[1].city}
      </li>
      <li class="list-group-item">
        Stayed From :{" "}
        {props.studentsDetails.address.history.stayed_places[1].duration.from}
      </li>
      <li class="list-group-item">
        Stayed to :{" "}
        {props.studentsDetails.address.history.stayed_places[1].duration.to}
      </li>
      <li class="list-group-item">
        Current City : {props.studentsDetails.address.current.temporary.city}
      </li>
      <li class="list-group-item">
        Current Province :{" "}
        {props.studentsDetails.address.current.temporary.district}
      </li>
      <li class="list-group-item">
        Current Latitude :{" "}
        {props.studentsDetails.address.current.temporary.geo.lat}
      </li>
      <li class="list-group-item">
        Current City : {props.studentsDetails.address.current.permanent.city}
      </li>
      <li class="list-group-item">
        Current Province :{" "}
        {props.studentsDetails.address.current.permanent.province}
      </li>

      <li class="list-group-item">
        Favurite Breakfast :{" "}
        {props.studentsDetails.preferences.food.dishes.breakfast[0].name}
      </li>
      <li class="list-group-item">
        Favurite Breakfast Type :{" "}
        {props.studentsDetails.preferences.food.dishes.breakfast[1].type}
      </li>
      <li class="list-group-item">
        Favourite Dinner :{" "}
        {props.studentsDetails.preferences.food.dishes.dinner[0].name}
      </li>
      <li class="list-group-item">
        Favourite Dinner Calories :{" "}
        {props.studentsDetails.preferences.food.dishes.dinner[0].calories}
      </li>
      <li class="list-group-item">Favorite Country : {props.studentsDetails.preferences.travel.favorite_places.countries[0].name}</li>
      <li class="list-group-item">Favorite City : {props.studentsDetails.preferences.travel.favorite_places.countries[1].cities[0]}</li>
      <li class="list-group-item">Dream City : {props.studentsDetails.preferences.travel.favorite_places.dream_city.name}</li>
      <li class="list-group-item"> Reason Of Dream City : {(props.studentsDetails.preferences.travel.favorite_places.dream_city.reasons.nature)  ? 'BeautiFul Nature' : 'Bad Nature'}</li>
      <li class="list-group-item">Hobby : {props.studentsDetails.activities.hobbies[0]}</li>
      <li class="list-group-item">Indoor Sport : {props.studentsDetails.activities.sports.indoor[1]}</li>
      <li class="list-group-item">Outdoor Sport : {props.studentsDetails.activities.sports.outdoor[0].name}</li>
      <li class="list-group-item">Outdoor Sport Position: {props.studentsDetails.activities.sports.outdoor[0].position}</li>
      <li class="list-group-item">Created At : {props.studentsDetails.system_meta.created_at}</li>
      <li class="list-group-item">Last Update : {props.studentsDetails.system_meta.last_updated}</li>
      <li class="list-group-item"> Active : {(props.studentsDetails.system_meta.is_active) ? 'Yes!' : 'No!'}</li>
    </ul>
  );
}
