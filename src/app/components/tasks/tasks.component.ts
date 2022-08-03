import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ITasks } from './../../../interfaces/Task';
import { TasksService } from './../../services/tasks.service';
import { AddTaskService } from './../../services/add-task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITasks[] = [];

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private tasksService: TasksService,
    private addTaskService: AddTaskService
  ) {
    this.subscription = this.addTaskService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    return this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  toggleAddTask() {
    this.addTaskService.toggleAddTask();
  }

  addTask(task: ITasks) {
    console.log(task);
    this.tasksService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  deleteTask(task: ITasks) {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => {
        return task.id != item.id;
      });
    });
  }
}
