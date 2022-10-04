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

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //Puedo identificar la parte del li a la que hice click
    //input, label o button

    const todoElemento = event.target.parentElement.parentElement; //Obtengo el li con el id del elemento
    const todoId = todoElemento.getAttribute('data-id');
    
    if ( nombreElemento.includes('input') ) {//click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){
        //Hay que borrar el todo
        todoList.eliminarTodo( todoId );
        //La referencia html también hay que borrarla
        divTodoList.removeChild( todoElemento );
    }
});