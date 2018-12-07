import {Action} from '@ngrx/store';

export enum TodoActionTypes {
  AgregarTODO = '[TODO] AgregarTODO',
}

export class AgregarTODOAction implements Action {
  readonly type = TodoActionTypes.AgregarTODO;

  constructor(public texto: string) {}
}

export type Acciones = AgregarTODOAction;
