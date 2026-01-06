export default function App(){
  let vegatables_array=["Brocouly","Cabbage","CauliFlower","Drum fruit","Lady Finger","Spinautch"]
  for(let i=0;i<vegatables_array.length;i++){
  return(
    <>
    <h1 className="vegetable_list">Vegetables</h1>
    <ul className="list-group">
      {vegatables_array.map((vegetable)=>(
        <li key={vegetable} className="list-group-item">{vegetable}</li>
      )
  )}
</ul>
    </>
  )
}
}

{/* <li className="list-group-item">Cabbage</li>
<li className="list-group-item">CauliFlower</li>
<li className="list-group-item">Drum fruit</li>
<li className="list-group-item">Lady Finger</li>
  <li className="list-group-item">Spinautch</li>  */}