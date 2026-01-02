export function Todo_item1() {
  return (
    <div class="container text-center">
      <div class="row task_div">
        <div class="col">
          <p className="task">Bring son from school</p>
        </div>
        <div class="col">
          <p>12/31/2025</p>
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
