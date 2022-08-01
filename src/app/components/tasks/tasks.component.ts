import { Component, OnInit } from '@angular/core';

import { ITasks } from './../../../interfaces/Task';
import { TasksService } from './../../services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
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
}
