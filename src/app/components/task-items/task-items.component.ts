import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  doneTask() {
    this.done = !this.done
  }
}
