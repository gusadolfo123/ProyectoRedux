import * as fromTODO from './todo.actions';
import {Todo} from './Models/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: fromTODO.Acciones): Todo[] {
  switch (action.type) {
    case fromTODO.TodoActionTypes.AgregarTODO:
      const todo = new Todo(action.texto);
      // [...state] clona un arreglo
      /* retorna un arreglo clonado agregando el todo se maneja de esta manera y no con push
       ya que se debe evitar la mutacion del estado */
      return [...state, todo];
    default:
      return state;
  }
}
