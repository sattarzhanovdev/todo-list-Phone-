const add = document.querySelector('.addTodoBtn')
const closeBtn = document.querySelector('.closeBtn')
const allInputs = document.querySelectorAll('.form')
const addTodoBtn = document.querySelector('.add')
const todos = document.querySelector('.todoList')

window.addEventListener('load', () => {
  if(!localStorage.getItem('todos')){
    localStorage.setItem('todos', JSON.stringify([]))
  }else{
    const baseTodo = JSON.parse(localStorage.getItem('todos'))
    const todoWithId = baseTodo.map((item , index) => {
      return {...item, id:index}
    })
    localStorage.setItem('todos' , JSON.stringify(todoWithId))
    const todoBase = JSON.parse(localStorage.getItem('todos'))
    todoTemplate(todoBase)
  }
})


add.addEventListener('click', () => {
  setTimeout(() => {
    addTodo.classList.add('active')
    addTodo.classList.add('activeTrans')
  }, 200)
})


closeBtn.addEventListener('click', () => {
  addTodo.classList.remove('active')
})

addTodoBtn.addEventListener('click' , e => {
  e.preventDefault()

  const base = JSON.parse(localStorage.getItem('todos'))

  allInputs.forEach(item => {
    localStorage.setItem('todos' , JSON.stringify([...base, {title: item[0].value, time: item[1].value , completed: false}]))
  })

  const baseTodo = JSON.parse(localStorage.getItem('todos'))

  todoTemplate(baseTodo)
})


function todoTemplate(base){
  const template = base.map(({id, title, time, completed}) => {
    return `
      <div class="todo">
        <div class="todoInfo">
          <h3>${title}</h3>
          <p>${time}</p>
        </div>
        <div class="completed">
          <input type="checkbox" />
        </div>
      </div>
    `
  }).join('')

  todos.innerHTML = template
}
