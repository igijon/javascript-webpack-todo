import {Todo} from '../classes';
import {todoList} from '../index';

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
        <li class="${(todo.completado)?'completed':''}" data-id="abc">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    //Creo el elemento html
    const div = document.createElement('div'); //Quiero crear el elemento con todos los nodos pero luego añado sólo el hijo
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div;
}

//Eventos
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0) { //Cuando pulso intro
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});