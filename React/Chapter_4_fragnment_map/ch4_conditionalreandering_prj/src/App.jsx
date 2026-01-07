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

import ErrorMessage from "./ErrorMessage";
export default function App() {
  let vegetables_array = [];
  // vegetables_array = [
  //   "Brocouly",
  //   "Cabbage",
  //   "CauliFlower",
  //   "Drum fruit",
  //   "Lady Finger",
  //   "Spinautch",
  // ];

  // if (vegetables_array.length === 0) {
  //   return <h2>Sorry no array found!</h2>;
  // }

  // let answer =
  //   vegetables_array.length === 0 ? (
  //     <h2>Sorry there are no veegtables found</h2>
    // ) : null;
  return (
    <>
      <h1 className="vegetable_list">Vegetables</h1>
       {/* {(vegetables_array.length===0 && <h2>Sorry there are no vegetables found</h2> )}  */}
       <ErrorMessage (sahil)></ErrorMessage>
      <ul className="list-group">
        {vegetables_array.map((vegetable) => (
          <li key={vegetable} className="list-group-item">
            {vegetable}
          </li>
        ))}
      </ul>
    </>
  );
}
// vegetables_array.length<0? null : <h2>Sorry no array found!</h2>
