export class TodoList { //Uso upper camel case porque son clases
    
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todo.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todo = this.todo.filter( todo => todo.id != id ); //Si pongo !== comparo también si son del mismo tipo
        //Devuelve el array excluyendo el id.
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for( const todo of this.todo ){
            console.log(todo.id, id);
            if (todo.id == id) { //en mi array lo tengo como numérico y al tomarlo del HTML es string, por eso dos iguales
                todo.completado = !todo.completado;
            }
        }
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        //Devuelve los que no están completados
        this.todo = this.todo.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        //stringify convierte un objeto, en este caso un array en un JSON perfecto.
        localStorage.setItem('todo', JSON.stringify(this.todo));
    }

    cargarLocalStorage() {
        this.todo = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo'))
                        :[];
    }
    
}