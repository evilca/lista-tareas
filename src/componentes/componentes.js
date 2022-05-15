import { listaTareas } from '..';
import {Todo} from '../classes';

//Crea la Tarea HTML
export const crearTareaHtml = ( todo ) => {

//Se instancia el elemento HTML dnde será agregado el nuevo código HTML
const divTodoList = document.querySelector('.todo-list');
//Se crear el bloque HTML que será apilado al elemento HTML padre
const htmlTodo = `
 <li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
 <div class="view">
     <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : '' }>
     <label>${todo.descripcion}</label>
     <button class="destroy"></button>
 </div>
 <input class="edit" value="Create a TodoMVC template">
 </li> 

`
//Se crear un div que contendrá el elemento que genera el Todo
const div = document.createElement('div');
div.innerHTML = htmlTodo;
//firstElementChild --> suprime el elemento html antecesor
divTodoList.append(div.firstElementChild);
return div.firstElementChild;

}

//Eventos
const inputText            = document.querySelector('.new-todo');
const divTodoList          = document.querySelector('.todo-list');
const btnBorrarCompletados = document.querySelector('.clear-completed');

//Captura las pulsaciones despues de presionar Enter y que el texto ingresado no sea vacio
inputText.addEventListener('keyup',  (event) => {

        if(event.keyCode === 13 && inputText.value.length > 0){
            const nuevoTodo = new Todo(inputText.value);
            listaTareas.nuevoTodo(nuevoTodo);
            console.log(listaTareas);
            crearTareaHtml(nuevoTodo);
            inputText.value = '';
        }
}
);

divTodoList.addEventListener('click', ( event )=>{
const nombreElemento = event.target.localName;//input, text , label
const todoElemento   = event.target.parentElement.parentElement;
const todoId         = todoElemento.getAttribute('data-id');


//Si hace click en el input
if(nombreElemento.includes('input')){
    listaTareas.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
}
//Si se hace click en el button se elimina el todo de la lista de tareas y
//Y se elimina el HTML asociado al elemento
else if(nombreElemento.includes('button')){
    listaTareas.eliminarTodo(todoId);
    divTodoList.removeChild( todoElemento );
}
console.log(listaTareas);

});


btnBorrarCompletados.addEventListener('click', (event) =>{
    
    listaTareas.eliminarCompletados();
    
    //Recorre la lista de elementos de abajo hacia arriba es un for inverso
    for(let i = divTodoList.children.length-1 ; i >= 0; i--){
        const elemento = divTodoList.children[i];
      //Evalua si el elemento contiene la clase completed, de ser así, elimina el elemento Hijo. El todo
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
      }
    }            

    });
