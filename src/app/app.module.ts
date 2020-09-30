import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoneTaskComponent } from './done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoListComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
