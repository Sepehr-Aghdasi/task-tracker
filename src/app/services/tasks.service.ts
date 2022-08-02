import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITasks } from './../../interfaces/Task';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITasks[]> {
    return this.http.get<ITasks[]>(this.apiUrl);
  }

  addTask(task: ITasks): Observable<ITasks> {
    return this.http.post<ITasks>(this.apiUrl, task);
  }
}
