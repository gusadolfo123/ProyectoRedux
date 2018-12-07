import * as fromTodo from './todo.actions';
import {Todo} from './Models/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones,
): Todo[] {
  switch (action.type) {
    case fromTodo.ActionTypes.AgregarTODO:
      const todo = new Todo(action.texto);
      // [...state] clona un arreglo
      return [...state, todo];
    default:
      return state;
  }
}
