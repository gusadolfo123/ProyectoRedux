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
import {todoReducer} from './todo/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
