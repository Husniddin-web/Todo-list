'use strict'
// =======VARIEBLES ======//




let formEl = $('.js-form');
let inputEl = $('.js-input')
let templete = $('.clone').content
let wrapper = $('.todo-list')
let counter = $('.counter')






// =======VARIEBLES ======//




//=====  MAKE OBJ INPUTVALUE =====//



function createTodo(value) {
    return {
        id: uuid.v4(),
        title: value,
        isChecked: false,
    }
}
//=====  MAKE OBJ INPUTVALUE =====//



// ======= ADD ELEMENTS ====== //
let allTodos = []
formEl.addEventListener('submit', e => {
    e.preventDefault()
    $('.text').classList.add('d-none')
    let inputValue = e.target[0].value
    let inputText = createTodo(inputValue)
    allTodos.push(inputText)
    inputEl.value = ''
    render(allTodos)
})

// ======= ADD ELEMENTS ====== //










// ======RENDER =====//
function render(todos) {
    wrapper.innerHTML = ''
    counter.textContent = todos.length
    if (todos.length == 0) {
        $('.text').classList.remove('d-none')
    }
    todos.map(todo => {
        let clone = templete.cloneNode(true);
        let labelEl = clone.querySelector('.label');
        labelEl.value = todo.title.toUpperCase()
        let deleteBtn = clone.querySelector('#todo-btn');
        let editBtn = clone.querySelector('.bg-warning');
        editBtn.setAttribute('readonly', 'readonly'),
            deleteBtn.dataset.id = todo.id
        editBtn.dataset.id = todo.id
        // let line = createElement('span', 'swipe');
        deleteBtn.addEventListener('click', ev => {
            allTodos = todos.filter(e => {
                return e.id !== ev.target.dataset.id
            })
            render(allTodos)
        })
        editBtn.addEventListener('click', e => {
            let edit = e.target
            if (edit.textContent == 'Edit') {

                edit.textContent = 'Save'
            }
            else if (edit.textContent = 'Save') {
                edit.textContent = 'Edit'
            }

        })
        // clone.appendChild(line)
        wrapper.appendChild(clone);
    });
}
// ======RENDER =====//
