 //selectors
 document.querySelector('form').addEventListener('submit',handleSubmitForm)
 document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)
 document.getElementById('clearAll').addEventListener('click',handleClearAll)


 //event handlers
 function handleSubmitForm(e) {
     e.preventDefault();
     let input = document.querySelector('input')
     let existingTodos = JSON.parse(localStorage.getItem('todos'))
     if(input.value != ''){
         addTodo(input.value)
         let todos = []
         todos.push(input.value)
         localStorage.setItem('todos',JSON.stringify(todos))
         if (existingTodos === null){
             existingTodos = ['anything']
         }
         existingTodos.push(input.value)
         
    localStorage.setItem("todos", JSON.stringify(existingTodos))
         input.value = ''
     }
 }



 
 //PART 4 OF THE EXERCISE ~~ IMPLEMENTING LOCAL STORAGE
const storeTodosInLocalStorage = (() => {
    let ul = document.querySelector('ul')
    let currentTodos = JSON.parse(localStorage.getItem('todos'))
        for (let i = currentTodos.length -1; i > 0; i--){
           let li = document.createElement('li')
           li.innerHTML = `
           <span class='todo-item'>${currentTodos[i]}</span>
           <button name='checkButton'><i class='fas fa-check-square'></i></button>
           <button name='deleteButton'><i class='fas fa-trash'></i></button>
           `
       
           li.classList.add('todo-list-item')
           ul.appendChild(li)
        }

})()




function handleClickDeleteOrCheck(e){
    if (e.target.name === 'checkButton'){
        checkTodo(e)
    }
    if(e.target.name === 'deleteButton'){
        deleteTodo(e)
    }
}

function handleClearAll(e){
    document.querySelector('ul').innerHTML = ''
    localStorage.clear()
}

 //helpers
 function addTodo(todo){
     let ul = document.querySelector('ul')

     let li = document.createElement('li')
     li.innerHTML = `
     <span class='todo-item'>${todo}</span>
     <button name='checkButton'><i class='fas fa-check-square'></i></button>
     <button name='deleteButton'><i class='fas fa-trash'></i></button>
     `
 
     li.classList.add('todo-list-item')
     ul.insertBefore(li,ul.childNodes[0])
 }


function checkTodo(e){
    let item = e.target.parentNode
    if(item.style.textDecoration === 'line-through'){
        item.style.textDecoration = 'none'
    }
    else{
        item.style.textDecoration = 'line-through'
    }
}

function deleteTodo(e){
    let item = e.target.parentNode
    item.remove()
}
