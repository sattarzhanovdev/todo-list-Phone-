const add = document.querySelector('.addTodoBtn')

add.addEventListener('click', () => {
  setTimeout(() => {
    addTodo.classList.add('active')
    addTodo.classList.add('activeTrans')
  }, 200)
})

const closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click', () => {
  addTodo.classList.remove('active')
})