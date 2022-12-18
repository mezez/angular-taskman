import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = ""
  day: string = ""
  reminder: boolean = false
  
  @Output() onCreateTask: EventEmitter<Task> = new EventEmitter()

  constructor(){

  }

  ngOnInit(): void {
      
  }

  onSubmit(){
    if (!this.text) {
      alert('Please add a task!');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onCreateTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
