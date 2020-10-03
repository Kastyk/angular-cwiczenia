import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  tasksList: Task[] = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListOb().subscribe((tasks: Task[]) => {
      // nowa lista, żeby ułatwić sortowanie przez pipe
      this.tasksList = tasks.slice();
    });
  }
  ngOnInit(): void {}

  remove(task: Task): void {
    this.tasksService.remove(task);
  }
  done(task: Task): void {
    task.end = new Date();
    this.tasksService.done(task);
    this.remove(task);
  }
}
