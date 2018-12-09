import * as fromFilter from './filter.actions';

const initialState: fromFilter.FilterType = fromFilter.FilterType.Todos;

export function filterReducer(state = initialState, action: fromFilter.Acciones): fromFilter.FilterType {
  switch (action.type) {
    case fromFilter.FilterActionTypes.SET_FILTRO:
      return action.filter;
    default:
      return state;
  }
}
