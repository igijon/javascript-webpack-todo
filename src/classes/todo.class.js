

export class Todo {

    constructor( tarea ) {

        this.tarea      = tarea;
        
        this.id         = new Date().getTime(); //Es una forma de obtener un id que nos sirve para esta tarea
        this.completado = false;
        this.creado     = new Date();
        
    }
}