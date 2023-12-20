const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit")

//Functions

const saveTodo = (text) =>{
  
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement("button") 
  doneBtn.classList.add("finish-todo")
  doneBtn.innerHTML = '<img src="./images/icons/add.svg" alt="" style="width: 18px; height: 18px;"></img>'
  todo.appendChild(doneBtn)

  const editBtn = document.createElement("button") 
  editBtn.classList.add("edit-todo")
  editBtn.innerHTML = '<img src="./images/icons/edit.svg" alt="" style="width: 18px; height: 18px;">'
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement("button") 
  deleteBtn.classList.add("delete-todo")
  deleteBtn.innerHTML = '<img src="./images/icons/delete.png" style="width: 18px; height: 18px;" alt=""></img>'
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)

  todoInput.value = ""
  todoInput.focus()

}


//Events


todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputValue = todoInput.value

  if(inputValue){
    saveTodo(inputValue)
  }

})

document.addEventListener("click", (e)=> {

  const targetEl = e.target
  const parentEl = targetEl.closest("div")

  if (targetEl.classList.contains("finish-todo")){
    parentEl.classList.toggle("done")
  }

  if (targetEl.classList.contains("delete-todo")){
    parentEl.remove()
  }

})