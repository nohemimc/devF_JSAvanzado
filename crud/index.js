"use strict"

const input_todo = document.getElementById("input-todo")
const btn_add = document.getElementById("btn-add")
const content_w = document.getElementById("content-wrapper")

const url = 'http://localhost:3000/data'

const printTasks = (task, id) => {
    let li = document.createElement('li')
    li.dataset.id = id
    console.log(li.dataset);
    li.textContent = task

    const btn_1 = document.createElement('button')
    const btn_2 = document.createElement('button')
    btn_1.textContent = "Editar"
    btn_2.textContent = "Eliminar"

    btn_1.addEventListener('click', () => {
        console.log('Editando..');
    })
    btn_2.addEventListener('click', () => {
        console.log('Eliminando...');
    })
    li.appendChild(btn_1)
    li.appendChild(btn_2)
    content_w.appendChild(li)
}

const getData = () => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log(data);
            data.forEach(element => {
                printTasks(element.task, element.id)
                
            });
        })
        .catch((error) => {
            console.error(error);
        })
}
getData()