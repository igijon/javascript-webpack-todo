import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScrip!!');

todoList.nuevoTodo( tarea );

crearTodoHtml(tarea);