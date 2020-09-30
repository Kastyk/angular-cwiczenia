import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  @Output() taskEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.taskEmitter.emit(this.newTask);
    this.newTask = '';
  }
}
