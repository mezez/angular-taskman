import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasksFromFile(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks
  }

  //fetch tasks from an actual backend
  //no need for of() because http client returns an observable by default
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  toggleTaskReminder(task:Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task, httpOptions)
  }
}
