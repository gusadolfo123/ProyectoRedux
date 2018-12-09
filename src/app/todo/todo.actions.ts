import {Action} from '@ngrx/store';
import {Todo} from './Models/todo.model';

export enum TodoActionTypes {
  AgregarTODO = '[TODO] AgregarTODO',
  ToggleTODO = '[TODO] ToggleTODO',
  EditarTODO = '[TODO] EditarTODO',
  BorrarTODO = '[TODO] BorrarTODO',
  ToggleAllTODO = '[TODO] ToggleAllTODO',
  LimpiarCompletados = '[TODO] LimpiarCompletados',
}

export class AgregarTODOAction implements Action {
  readonly type = TodoActionTypes.AgregarTODO;

  constructor(public texto: string) {}
}

export class ToggleTODOAction implements Action {
  readonly type = TodoActionTypes.ToggleTODO;

  constructor(public id: number) {}
}

export class EditarTODOAction implements Action {
  readonly type = TodoActionTypes.EditarTODO;

  constructor(public id: number, public texto: string) {}
}

export class BorrarTODOAction implements Action {
  readonly type = TodoActionTypes.BorrarTODO;

  constructor(public id: number) {}
}

export class ToggleTODOAllAction implements Action {
  readonly type = TodoActionTypes.ToggleAllTODO;

  constructor(public checked: boolean) {}
}

export class LimpiarCompletadosAction implements Action {
  readonly type = TodoActionTypes.LimpiarCompletados;
}

export type Acciones =
  | AgregarTODOAction
  | ToggleTODOAction
  | EditarTODOAction
  | BorrarTODOAction
  | ToggleTODOAllAction
  | LimpiarCompletadosAction;
