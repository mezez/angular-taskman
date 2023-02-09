import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { Task } from '../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  id: number = 0;
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showEditTask: boolean = false;
  subscription: Subscription;

  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggleEdit().subscribe((value) => {
      this.showEditTask = value[0];
      this.id = value[1].id;
      this.text = value[1].text;
      this.day = value[1].day;
      this.reminder = value[1].reminder;
    });
  }

  onSubmit() {
    if (!this.text) {
      alert('Task cannot be empty');
      return;
    }
    const updatedTask = {
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onUpdateTask.emit(updatedTask);
    this.uiService.toggleEditTask({
      text: '',
      day: '',
      reminder: false,
    });
  }
}
