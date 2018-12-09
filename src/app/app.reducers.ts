import {Todo} from './todo/Models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todo/todo.reducer';
import {filterReducer} from './filter/filter.reducer';
import {FilterType} from './filter/filter.actions';

// Estado de la aplicacion
export interface AppState {
  todos: Todo[];
  filtro: FilterType;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer,
};
