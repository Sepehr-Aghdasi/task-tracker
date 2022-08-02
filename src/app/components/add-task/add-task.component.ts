import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TasksService } from './../../services/tasks.service';
import { ITasks } from './../../../interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITasks> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  addTask() {
    if (!this.text && !this.day) {
      console.log('empty input');
      return;
    }
    this.onAddTask.emit();
    console.log(this.text, this.day, this.reminder);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
