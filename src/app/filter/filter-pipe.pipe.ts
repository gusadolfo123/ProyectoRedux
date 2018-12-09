import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../todo/Models/todo.model';
import {FilterType} from './filter.actions';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(todos: Todo[], filtro: FilterType): Todo[] {
    switch (filtro) {
      case FilterType.Todos:
        return todos;
      case FilterType.Pendientes:
        return todos.filter(element => !element.completado);
      case FilterType.Completados:
        return todos.filter(element => element.completado);
      default:
        return todos;
    }
  }
}
