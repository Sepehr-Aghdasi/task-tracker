import { ITasks } from './../../../interfaces/Task';
import { Component, Input, OnInit } from '@angular/core';

import { TasksService } from './../../services/tasks.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.scss'],
})
export class TaskItemsComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() done: boolean = false;

  faTimes = faTimes;

  tasks: ITasks[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    return this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  doneTask() {
    this.done = !this.done;
  }
}
