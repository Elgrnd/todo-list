import { Component} from '@angular/core';
import { TodoItem } from './todo-item/todo-item';
import { Task } from './task';
import { ReactiveFormsModule, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  imports: [TodoItem, ReactiveFormsModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Apprendre Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Créer ma première To-Do List',
      completed: false,
    },
    {
      id: 3,
      title: 'Comprendre les composants',
      completed: false,
    },
  ];

  newTask = new FormControl('', [Validators.required, Validators.minLength(3)]);
  searchControl = new FormControl('', {nonNullable: true});

  toogleTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addTask() {
    if (this.newTask.invalid || !this.newTask.value) {
      return;
    }

    const title = this.newTask.value.trim();

    const task: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    this.tasks.push(task);
    this.newTask.reset();
  }

  get filteredTasks(): Task[] {
    const search = this.searchControl.value.toLowerCase();

    return this.tasks.filter(task =>
    task.title.toLowerCase().includes(search))
  }
}
