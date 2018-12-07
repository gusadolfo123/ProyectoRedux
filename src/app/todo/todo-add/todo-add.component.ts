import {Component, OnInit} from '@angular/core';
import {Todo} from '../Models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as fromAction from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTODO() {
    if (!this.txtInput.valid) {
      return;
    }

    const accion = new fromAction.AgregarTODOAction(this.txtInput.value);
    this.store.dispatch(accion);

    this.txtInput.setValue('');
  }
}
