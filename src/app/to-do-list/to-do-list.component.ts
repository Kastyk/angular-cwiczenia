import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() tasksList: string;
  @Output() emitRemove = new EventEmitter<string>();
  @Output() emitDone = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  remove(task): void {
    this.emitRemove.emit(task);
  }
  done(task): void {
    this.emitDone.emit(task);
    this.remove(task);
  }
}
