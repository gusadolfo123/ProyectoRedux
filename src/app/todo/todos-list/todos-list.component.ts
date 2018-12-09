import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Todo} from '../Models/todo.model';
import {FormControl} from '@angular/forms';
import {ToggleTODOAllAction} from '../todo.actions';
import {FilterType} from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [],
})
export class TodosListComponent implements OnInit {
  todos: Todo[];
  chkToggleAll: FormControl;
  checked: boolean;
  filtro: FilterType;

  constructor(private store: Store<AppState>) {
    this.checked = false;
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

  toggleAll() {
    this.checked = !this.checked;
    this.store.dispatch(new ToggleTODOAllAction(this.checked));
  }
}
