const textfield = document.querySelector('#text');
const addbtn = document.querySelector('#submit');
const ul = document.querySelector('.todo')
const deletebtn = document.querySelector('.delete')

function createTodo() {
    if (textfield.value != ''){

        var div = document.createElement('li');
        div.classList.add('todo');


        var li = document.createElement('li');
        li.classList.add('todo');

        var p = document.createElement('p');
        p.textContent = textfield.value
        var button = document.createElement('button');
        button.innerHTML = 'X'
        button.classList.add('delete')
        

        var span = document.createElement('span')

        ul.appendChild(div)
        div.appendChild(li)
        li.append(p)
        ul.appendChild(button)

        textfield.value = ''
    }
}

addbtn.addEventListener('click' , createTodo)
