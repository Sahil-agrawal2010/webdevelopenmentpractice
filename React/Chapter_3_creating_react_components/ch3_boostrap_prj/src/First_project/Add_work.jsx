export function Main_add(){
    return <div class="container text-center">
  <div class="row">
    <div class="col">
     <label id="ToDo" htmlFor="">Enter Your TODO Here</label> <input className="user_Input" type="text"/>
    </div>
    <div class="col">
      <input type="date" />
    </div>
    <div class="col">
      <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
</div>
}