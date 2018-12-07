import {Action} from '@ngrx/store';

export enum ActionTypes {
  AgregarTODO = '[TODO] AgregarTODO',
}

export class AgregarTODOAction implements Action {
  readonly type = ActionTypes.AgregarTODO;

  constructor(public texto: string) {}
}

export type Acciones = AgregarTODOAction;
