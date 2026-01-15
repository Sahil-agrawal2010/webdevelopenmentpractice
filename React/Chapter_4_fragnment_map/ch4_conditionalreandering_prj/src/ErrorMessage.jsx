// export default function ErrorMessage(props){
//    return (

//        (props.sahil).length===0 && <h2>Sorry there are no vegetables found</h2>
//    )
// }

// export default function ErrorMessage(props) {
//   return (
//     <ul class="list-group">
//       <li class="list-group-item">
//         <h2>Name : {props.studentsDetails.basic_info.personal.name}</h2>
//       </li>
//       <li class="list-group-item">
//         <p>Age : {props.studentsDetails.basic_info.personal.age}</p>
//       </li>
//       <li class="list-group-item">
//         Education Level : {props.studentsDetails.basic_info.education.level}
//       </li>
//       <li class="list-group-item">
//         Education faculty : {props.studentsDetails.basic_info.education.faculty}
//       </li>
//       <li class="list-group-item">
//         Name Of Collage :{" "}
//         {props.studentsDetails.basic_info.education.college.name}
//       </li>
//       <li class="list-group-item">
//         Name Of University :{" "}
//         {props.studentsDetails.basic_info.education.college.university}
//       </li>
//       <li class="list-group-item">
//         City :{" "}
//         {props.studentsDetails.basic_info.education.college.location.city}
//       </li>
//       <li class="list-group-item">
//         Province :{" "}
//         {props.studentsDetails.basic_info.education.college.location.province}
//       </li>
//       <li class="list-group-item">
//         {" "}
//         Address : {props.studentsDetails.address.history.stayed_places[0].city}
//       </li>
//       <li class="list-group-item">
//         Stayed From :{" "}
//         {props.studentsDetails.address.history.stayed_places[0].duration.from}
//       </li>
//       <li class="list-group-item">
//         Stayed Till :{" "}
//         {props.studentsDetails.address.history.stayed_places[0].duration.to}
//       </li>
//       <li class="list-group-item">
//         City : {props.studentsDetails.address.history.stayed_places[1].city}
//       </li>
//       <li class="list-group-item">
//         Stayed From :{" "}
//         {props.studentsDetails.address.history.stayed_places[1].duration.from}
//       </li>
//       <li class="list-group-item">
//         Stayed to :{" "}
//         {props.studentsDetails.address.history.stayed_places[1].duration.to}
//       </li>
//       <li class="list-group-item">
//         Current City : {props.studentsDetails.address.current.temporary.city}
//       </li>
//       <li class="list-group-item">
//         Current Province :{" "}
//         {props.studentsDetails.address.current.temporary.district}
//       </li>
//       <li class="list-group-item">
//         Current Latitude :{" "}
//         {props.studentsDetails.address.current.temporary.geo.lat}
//       </li>
//       <li class="list-group-item">
//         Current City : {props.studentsDetails.address.current.permanent.city}
//       </li>
//       <li class="list-group-item">
//         Current Province :{" "}
//         {props.studentsDetails.address.current.permanent.province}
//       </li>

//       <li class="list-group-item">
//         Favurite Breakfast :{" "}
//         {props.studentsDetails.preferences.food.dishes.breakfast[0].name}
//       </li>
//       <li class="list-group-item">
//         Favurite Breakfast Type :{" "}
//         {props.studentsDetails.preferences.food.dishes.breakfast[1].type}
//       </li>
//       <li class="list-group-item">
//         Favourite Dinner :{" "}
//         {props.studentsDetails.preferences.food.dishes.dinner[0].name}
//       </li>
//       <li class="list-group-item">
//         Favourite Dinner Calories :{" "}
//         {props.studentsDetails.preferences.food.dishes.dinner[0].calories}
//       </li>
//       <li class="list-group-item">Favorite Country : {props.studentsDetails.preferences.travel.favorite_places.countries[0].name}</li>
//       <li class="list-group-item">Favorite City : {props.studentsDetails.preferences.travel.favorite_places.countries[1].cities[0]}</li>
//       <li class="list-group-item">Dream City : {props.studentsDetails.preferences.travel.favorite_places.dream_city.name}</li>
//       <li class="list-group-item"> Reason Of Dream City : {(props.studentsDetails.preferences.travel.favorite_places.dream_city.reasons.nature)  ? 'BeautiFul Nature' : 'Bad Nature'}</li>
//       <li class="list-group-item">Hobby : {props.studentsDetails.activities.hobbies[0]}</li>
//       <li class="list-group-item">Indoor Sport : {props.studentsDetails.activities.sports.indoor[1]}</li>
//       <li class="list-group-item">Outdoor Sport : {props.studentsDetails.activities.sports.outdoor[0].name}</li>
//       <li class="list-group-item">Outdoor Sport Position: {props.studentsDetails.activities.sports.outdoor[0].position}</li>
//       <li class="list-group-item">Created At : {props.studentsDetails.system_meta.created_at}</li>
//       <li class="list-group-item">Last Update : {props.studentsDetails.system_meta.last_updated}</li>
//       <li class="list-group-item"> Active : {(props.studentsDetails.system_meta.is_active) ? 'Yes!' : 'No!'}</li>
//     </ul>
//   );
// }






export default function ErrorMessage(props){
  return <ul class="list-group">
  <li class="list-group-item">Status : {props.studentsDetails.status}</li>
  <li class="list-group-item">Total Record : {props.studentsDetails.pagination.per_page}</li>
  <li class="list-group-item">User ID : {props.studentsDetails.data.user.id}</li>
  <li class="list-group-item">Name : {props.studentsDetails.data.user.profile.personal.name}</li>
  <li class="list-group-item">Email : {props.studentsDetails.data.user.profile.contact.email}</li>
    <li class="list-group-item">Number : {props.studentsDetails.data.user.profile.contact.phones[0].number}</li>
    <li class="list-group-item">Verified : {(props.studentsDetails.data.user.profile.contact.phones[0].verified) ? 'Yes!' : 'No!'}</li>
    <li class="list-group-item">Role : {props.studentsDetails.data.user.roles[1]}</li>
    <li class="list-group-item">Ability To Read : {(props.studentsDetails.data.user.permissions.modules.dashboard.read) ? 'Yes!' : 'No!'}</li>
    <li class="list-group-item">Courses : {(props.studentsDetails.data.user.permissions.modules.courses.read) ? 'Yes Studing!' : 'No Not Studing Any Courses!'}</li>
    <li class="list-group-item">Advance Courses : {(props.studentsDetails.data.user.permissions.modules.courses.advanced.export) ? 'Yes Styding!' : 'No Not Studing Any!'}</li>
    <li class="list-group-item">Course Id : {props.studentsDetails.data.academic.enrolled_courses[0].course_id}</li>
    <li class="list-group-item">Course Teacher Name : {props.studentsDetails.data.academic.enrolled_courses[0].instructor.name}</li>
    <li class="list-group-item">Email : {props.studentsDetails.data.academic.enrolled_courses[0].instructor.contact.email}</li>
    <li class="list-group-item">Course Percentage : {props.studentsDetails.data.academic.enrolled_courses[0].progress.completed_percentage}%</li>
    <li class="list-group-item">Final Grade : {(props.studentsDetails.data.academic.enrolled_courses[0].progress.grades.final_term) ? 'Yes It Has Been Arrived!' : 'No It Has Not Been Arrived Yet!'}</li>
    <li class="list-group-item">Course Name : {props.studentsDetails.data.academic.enrolled_courses[1].title}</li>
    <li class="list-group-item">Course Teacher Name : {props.studentsDetails.data.academic.enrolled_courses[1].instructor.name}</li>
    <li class="list-group-item">Course Percentage : {props.studentsDetails.data.academic.enrolled_courses[1].progress.completed_percentage}%</li>
    <li class="list-group-item">Course Grades : {props.studentsDetails.data.academic.enrolled_courses[1].progress.grades.mid_term}</li>
    <li class="list-group-item">Prefered Theme : {props.studentsDetails.data.preferences.ui.theme}</li>
    <li class="list-group-item">High Contrast : {(props.studentsDetails.data.preferences.ui.accessibility.high_contrast) ? 'Yes!' : 'No!'}</li>
    <li class="list-group-item">Emails : {(props.studentsDetails.data.preferences.notifications.email) ? "Yes!" : "No!"}</li>
    <li class="list-group-item">Enabled : {(props.studentsDetails.data.preferences.notifications.push.enabled) ? 'Yes!' : 'No!'}</li>
    <li class="list-group-item">Quiet Hour From : {props.studentsDetails.data.preferences.notifications.push.schedule.quiet_hours.from} : Quiet Hours To : {props.studentsDetails.data.preferences.notifications.push.schedule.quiet_hours.to}</li>
    <li class="list-group-item">IP Address : {props.studentsDetails.logs.last_login.ip}</li>
    <li class="list-group-item">Device Type : {props.studentsDetails.logs.last_login.device.type}</li>
    <li class="list-group-item">Operating System : {props.studentsDetails.logs.last_login.device.os.name}</li>
    <li class="list-group-item">Action Taken : {props.studentsDetails.logs.activity_history[0].action}</li>
    <li class="list-group-item">Time Stamp : {props.studentsDetails.logs.activity_history[0].timestamp}</li>
    <li class="list-group-item">Action Done : {props.studentsDetails.logs.activity_history[1].action}</li>
    <li class="list-group-item">Course ID : {props.studentsDetails.logs.activity_history[1].meta.course_id}</li>
    <li class="list-group-item"></li>
</ul>
}