const addTodo = document.querySelector('.addTodo')

addTodo.innerHTML = `
  <div class="close">
    <li class="closeBtn">
      <i class="fa fa-arrow-left"></i> Close
    </li>
    <h2>Task</h2>
  </div>
  <h1>
    Add a task
  </h1>
  <form class="form">
    <div>
      <h3>Name</h3> <input type="text" placeholder="Title" class="title" />
    </div>
    <div>
      <h3>Hour</h3> <input type="time" class="time" /><h3 class="timezone">AM</h3>
    </div>
    <div>
      <button class="add">Done</button>
    </div>
  </form>
`
