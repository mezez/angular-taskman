import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    text: '',
    day: '',
    reminder: false,
  };

  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  onEdit(task: Task) {
    this.uiService.toggleEditTask(task);
  }

  onDelete() {
    this.onDeleteTask.emit(this.task);
  }

  onToggle() {
    this.onToggleReminder.emit();
  }
}
