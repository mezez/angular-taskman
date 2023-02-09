import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private showEditTask: boolean = false;
  private subject = new Subject<any>();
  private editSubject = new Subject<any>();
  task: Task = {
    text: '',
    day: '',
    reminder: false,
  };

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleEditTask(task: Task) {
    this.showEditTask = !this.showEditTask;
    this.task = task;
    this.editSubject.next([this.showEditTask, this.task]);
  }

  //subscribe to onToggle to do something whenever toggle happens
  //this will return the updated value of the subject (ie showAddTask)
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  onToggleEdit(): Observable<any> {
    return this.editSubject.asObservable();
  }
}
