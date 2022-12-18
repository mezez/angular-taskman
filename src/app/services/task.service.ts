import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

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
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
