import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTareaHtml } from './componentes/componentes.js'


 export const listaTareas = new TodoList();

 listaTareas.todos.forEach(crearTareaHtml);

  const nuevoTodo = new Todo('Aprender JS');
 
//  listaTareas.todos[0].imprimirClase();

console.log('todos', listaTareas.todos);