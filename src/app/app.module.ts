import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {TodoComponent} from './todo/todo.component';
import {TodosListComponent} from './todo/todos-list/todos-list.component';
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {TodoAddComponent} from './todo/todo-add/todo-add.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {ReactiveFormsModule} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {AppReducers} from './app.reducers';
import {todoReducer} from './todo/todo.reducer';
import { FilterPipePipe } from './filter/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoAddComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({todos: todoReducer}),
    StoreModule.forRoot(AppReducers),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
