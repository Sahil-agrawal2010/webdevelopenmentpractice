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