import {Component, OnInit} from '@angular/core';
import {FilterType, SetFiltroAction} from 'src/app/filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/app.reducers';
import {LimpiarCompletadosAction} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  filtroValidos: string[] = [FilterType.Todos, FilterType.Completados, FilterType.Pendientes];
  pendientes: number;
  filtroActual: FilterType;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.pendientes = state.todos.filter(element => !element.completado).length;
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: FilterType) {
    this.store.dispatch(new SetFiltroAction(nuevoFiltro));
  }

  limpiarCompletados() {
    this.store.dispatch(new LimpiarCompletadosAction());
  }
}
