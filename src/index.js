import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log(todoList);