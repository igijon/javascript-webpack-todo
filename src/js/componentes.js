import {Todo} from '../classes';
import {todoList} from '../index';

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

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

btnBorrar.addEventListener('click', (event) => {
    todoList.eliminarCompletados();
    //Siguen estando en el HTML
    //Eliminaré de abajo hacia arriba para que se mantengan los 
    //índices
    for ( let i = divTodoList.children.length-1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        //Compruebo si están completados o no.
        //Puedo mirar si la clase del li tiene el completed
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    //Si solo pongo ! convierte el valor en verdadero o falso y luego lo invierte
    //Si pongo !! fuerzo la conversión del tipo, es decir, algo similar al ===
    //con la doble negación obtenemos su estricta forma booleana
    if ( !filtro ) { return; }

    //Esta parte permite establecer la clase selected al elemento seleccionado
    //y la borra del anterior
    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completado');
        switch(filtro) {
            case 'Pendientes': 
                if( completado ) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados': 
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
                break;
        }

    }

});