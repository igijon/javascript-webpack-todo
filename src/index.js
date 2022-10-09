import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todo.forEach(element => crearTodoHtml(element));
todoList.todo.forEach(crearTodoHtml); //Es lo mismo que la línea de arriba
