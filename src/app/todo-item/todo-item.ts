import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'

@Component({
  imports: [],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  @Input() task!: Task;

  @Output() taskToogled = new EventEmitter<number>
  @Output() taskDeleted = new EventEmitter<number>
}
