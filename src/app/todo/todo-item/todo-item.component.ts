import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {Todo} from '../Models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {AppState} from 'src/app/app.reducers';
import {Store} from '@ngrx/store';
import {ToggleTODOAction, EditarTODOAction, BorrarTODOAction} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  // simula select de jquery
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // escucha los cambios del chk
    this.chkField.valueChanges.subscribe(valor => {
      this.store.dispatch(new ToggleTODOAction(this.todo.id));
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => this.txtInputFisico.nativeElement.select(), 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.valid && this.txtInput.value !== this.todo.texto) {
      const accion = new EditarTODOAction(this.todo.id, this.txtInput.value);
      this.store.dispatch(accion);
    }

    return;
  }

  borrarTODO() {
    this.store.dispatch(new BorrarTODOAction(this.todo.id));
  }
}
