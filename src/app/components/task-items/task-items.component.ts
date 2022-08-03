import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITasks } from './../../../interfaces/Task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.scss'],
})
export class TaskItemsComponent implements OnInit {
  @Input() task!: ITasks;
  @Output() deleteTask: EventEmitter<ITasks> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  toggleTask() {
    this.task.reminder = !this.task.reminder;
  }

  handleDeleteTask(task: ITasks) {
    this.deleteTask.emit(task);
  }
}
