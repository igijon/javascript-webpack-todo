export class TodoList { //Uso upper camel case porque son clases
    
    constructor() {
        this.todo = [];
    }

    nuevoTodo(todo) {
        this.todo.push(todo);
    }

    eliminarTodo(id) {

    }

    marcarCompletado(id) {
        for( const todo of this.todo ){
            console.log(todo.id, id);
            if (todo.id == id) { //en mi array lo tengo como numérico y al tomarlo del HTML es string, por eso dos iguales
                todo.completado = !todo.completado;
            }
        }
    }

    eliminarCompletados() {

    }

    
}