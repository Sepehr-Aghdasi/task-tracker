import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AddTaskService } from './../../services/add-task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  btnText: string = 'Add Task';

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private addTaskService: AddTaskService) {
    this.subscription = this.addTaskService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.addTaskService.toggleAddTask();
  }
}
