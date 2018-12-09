import {Action} from '@ngrx/store';

export enum FilterActionTypes {
  SET_FILTRO = '[Filter] SET_FILTRO',
}

export enum FilterType {
  Todos = 'Todos',
  Pendientes = 'Pendientes',
  Completados = 'Completados',
}

export class SetFiltroAction implements Action {
  readonly type = FilterActionTypes.SET_FILTRO;

  constructor(public filter: FilterType) {}
}

export type Acciones = SetFiltroAction;
