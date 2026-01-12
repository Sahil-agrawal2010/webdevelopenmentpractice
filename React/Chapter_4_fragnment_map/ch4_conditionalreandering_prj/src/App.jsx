// export default function App(){
//   let vegatables_array=["Brocouly","Cabbage","CauliFlower","Drum fruit","Lady Finger","Spinautch"]
//   for(let i=0;i<vegatables_array.length;i++){
//   return(
//     <>
//     <h1 className="vegetable_list">Vegetables</h1>
//     <ul className="list-group">
//       {vegatables_array.map((vegetable)=>(
//         <li key={vegetable} className="list-group-item">{vegetable}</li>
//       )
//   )}
// </ul>
//     </>
//   )
// }
// }


// import ErrorMessage from "./ErrorMessage";
// export default function App() {
//   let vegetables_array = [];
//   vegetables_array = [
//     "Brocouly",
//     "Cabbage",
//     "CauliFlower",
//     "Drum fruit",
//     "Lady Finger",
//     "Spinautch",
//   ];

  // if (vegetables_array.length === 0) {
  //   return <h2>Sorry no array found!</h2>;
  // }

  // let answer =
    // vegetables_array.length === 0 ? (
  //     <h2>Sorry there are no veegtables found</h2>
    // ) : null;



    
//   return (
//     <>
//       <h1 className="vegetable_list">Vegetables</h1>
//        {/* {(vegetables_array.length===0 && <h2>Sorry there are no vegetables found</h2> )}  */}
//        <ErrorMessage sahil={vegetables_array}></ErrorMessage>
//       <ul className="list-group">
//         {vegetables_array.map((vegetables) => (
//           <li key={vegetables} className="list-group-item">
//             {vegetables}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// vegetables_array.length<0? null : <h2>Sorry no array found!</h2>




import ErrorMessage from "./ErrorMessage";




export default function App(){
let studentProfile = {
    basic_info: {
        personal: {
            name: 'Nayan Pathak',
            age: 22,
            gender: 'Male'
        },
        education: {
            level: 'Bachelor',
            faculty: 'Computer Science',
            current_semester: 6,
            college: {
                name: 'ABC College',
                university: 'Tribhuvan University',
                location: {
                    city: 'Kathmandu',
                    district: 'Kathmandu',
                    province: 'Bagmati'
                }
            }
        }
    },

    address: {
        history: {
            stayed_places: [
                {
                    city: 'Kathmandu',
                    duration: {
                        from: 2019,
                        to: 2022
                    },
                    reason: 'Study'
                },
                {
                    city: 'Chitwan',
                    duration: {
                        from: 2016,
                        to: 2019
                    },
                    reason: 'Family'
                }
            ]
        },

        current: {
            temporary: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi',
                geo: {
                    lat: 26.5453,
                    lng: 88.0991
                }
            },
            permanent: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi'
            }
        }
    },

    preferences: {
        food: {
            dishes: {
                breakfast: [
                    { name: 'Bread', type: 'Light' },
                    { name: 'Chole', type: 'Heavy' }
                ],
                dinner: [
                    { name: 'Bhat', calories: 400 },
                    { name: 'Dal', calories: 150 },
                    { name: 'Sabji', calories: 120 }
                ]
            }
        },
        travel: {
            favorite_places: {
                countries: [
                    {
                        name: 'Switzerland',
                        cities: ['Zurich', 'Geneva']
                    },
                    {
                        name: 'Norway',
                        cities: ['Oslo']
                    }
                ],
                dream_city: {
                    name: 'Manang',
                    reasons: {
                        nature: true,
                        trekking: true,
                        snow: false
                    }
                }
            }
        }
    },

    activities: {
        hobbies: ['Coding', 'Reading', 'Traveling'],
        sports: {
            indoor: ['Chess', 'Table Tennis'],
            outdoor: [
                {
                    name: 'Football',
                    position: 'Midfielder',
                    experience_years: 5
                }
            ]
        }
    },

    system_meta: {
        created_at: '2026-01-01',
        last_updated: '2026-01-10',
        is_active: true
    }
};
return(
  <ErrorMessage studentsDetails = {studentProfile} ></ErrorMessage>
)

}