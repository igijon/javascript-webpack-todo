

export class Todo {

    static fromJSON( {id, tarea, completado, creado} ) {
        const tempTodo = new Todo(tarea);
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea      = tarea;
        
        this.id         = new Date().getTime(); //Es una forma de obtener un id que nos sirve para esta tarea
        this.completado = false;
        this.creado     = new Date();
        
    }
}