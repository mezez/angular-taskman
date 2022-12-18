import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
      // this.tasks =  this.taskService.getTasks()
      this.taskService.getTasks().subscribe(observableTasks => this.tasks = observableTasks);
  }

  deleteTaskFromServer(task: Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(currentTask => currentTask.id !== task.id));

  }

  toggleTaskReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.toggleTaskReminder(task).subscribe()
  }

  createTask(task:Task){
    this.taskService.createTask(task).subscribe((newTask) => this.tasks.push(newTask))
  }

}
