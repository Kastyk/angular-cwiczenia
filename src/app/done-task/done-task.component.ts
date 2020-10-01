import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css'],
})
export class DoneTaskComponent implements OnInit {
  tasksDone: Task[] = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneOb().subscribe((tasks: Task[]) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit(): void {}
}
