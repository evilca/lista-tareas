import { Todo } from "./todo.class";

//Clase que permite instanciar objetos de tipo TodoList
export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }
//Agrega un Todo al arreglo de todos
    nuevoTodo( todo ){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
//Genera un nuevo arreglo con todos los todo que no tengan el id enviado.
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

//Recorre toda la lista de todos para negar el completado del id enviado
//Una vez encontrado, rompe el bucle.
    marcarCompletado( id ){
        
        for( const todo of this.todos ){
            console.log(id, todo.id);
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    //Genera un nuevo arreglo obviando los todo que no esten completado.
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

       this.todos = ( localStorage.getItem('todo') ) 
                    ? JSON.parse(localStorage.getItem('todo') ) 
                    : [];
        //Barre todos los elementos y retorna un arreglo con los objetos mutados
         this.todos = this.todos.map(Todo.fromJson);
    }
    
}