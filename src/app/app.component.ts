import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksList: string[] = [];
  tasksDone: string[] = [];

  add(task): void {
    this.tasksList.push(task);
  }
  remove(task): void {
    this.tasksList = this.tasksList.filter(item => item !== task);
  }
  done(task): void {
    this.tasksDone.push(task);
  }
}
