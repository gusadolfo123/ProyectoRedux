import * as fromTODO from './todo.actions';
import {Todo} from './Models/todo.model';

const estadoInicial: Todo[] = [new Todo('Salvar el Mundo'), new Todo('Abdominales')];

export function todoReducer(state = estadoInicial, action: fromTODO.Acciones): Todo[] {
  switch (action.type) {
    case fromTODO.TodoActionTypes.AgregarTODO:
      const todo = new Todo(action.texto);
      // [...state] clona un arreglo
      /* retorna un arreglo clonado agregando el todo se maneja de esta manera y no con push ya que se debe evitar la mutacion del estado */
      return [...state, todo];
    case fromTODO.TodoActionTypes.ToggleTODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, completado: !todoEdit.completado};
        } else {
          return todoEdit;
        }
      });
    case fromTODO.TodoActionTypes.EditarTODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, texto: action.texto};
        } else {
          return todoEdit;
        }
      });
    case fromTODO.TodoActionTypes.BorrarTODO:
      return state.filter(todoBorrar => todoBorrar.id !== action.id);
    case fromTODO.TodoActionTypes.ToggleAllTODO:
      return state.map(todos => {
        return {...todos, completado: action.checked};
      });
    case fromTODO.TodoActionTypes.LimpiarCompletados:
      return state.filter(todoBorrar => !todoBorrar.completado);
    default:
      return state;
  }
}
