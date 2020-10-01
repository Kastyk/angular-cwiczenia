import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksList: Task[] = [];
  private tasksDone: Task[] = [];
  // Subject służy do tego, aby komunikować obiektom, które subskrybują daną listę, że coś się z nią zmieniło
  private tasksListOb = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneOb = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      { name: 'Sprzątanie kuwety', created: new Date() },
      { name: 'Nauka Angulara', created: new Date() },
      { name: 'Podlewanie kwiatów', created: new Date() },
      { name: 'Zakupy', created: new Date() },
    ];
    this.tasksListOb.next(this.tasksList);
  }

  add(task: Task): void {
    this.tasksList.push(task);
    this.tasksListOb.next(this.tasksList);
  }
  remove(task: Task): void {
    this.tasksList = this.tasksList.filter((item) => item !== task);
    this.tasksListOb.next(this.tasksList);
  }
  done(task: Task): void {
    this.tasksDone.push(task);
    this.tasksDoneOb.next(this.tasksDone);
  }
  getTasksListOb(): Observable<Array<Task>> {
    return this.tasksListOb.asObservable();
  }
  getTasksDoneOb(): Observable<Array<Task>> {
    return this.tasksDoneOb.asObservable();
  }
}
