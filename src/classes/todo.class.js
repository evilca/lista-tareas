export class Todo {

    static fromJson({id, descripcion, completado, creado}){

        const tempTodo      = new Todo( descripcion );
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;
        console.log(tempTodo);
        return tempTodo;
    }

    constructor(tarea){
        this.descripcion = tarea;
        this.id          = new Date().getTime();
        this.completado  = false;
        this.creado      = new Date();
    }

    imprimirClase(){
        console.log(` ${this.tarea} - ${this.id} `);
    }
    
}