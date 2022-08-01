import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddTaskService {
  private showAddTask: boolean = false;
  private toggle = new Subject<any>();

  constructor() {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.toggle.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.toggle.asObservable();
  }
}
