import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  //subscribe to onToggle to do something whenever toggle happens
  //this will return the updated value of the subject (ie showAddTask)
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
