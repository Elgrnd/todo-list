import { Component, signal } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';
import { Task } from './task';

@Component({
  imports: [TodoItem],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  tasks: Task[] = [
    {
      id: 1,
      title: "Apprendre Angular",
      completed: false
    },
    {
      id: 2,
      title: "Créer ma première To-Do List",
      completed: false
    },
    {
      id: 3,
      title: "Comprendre les composants",
      completed: false
    }
  ];

  toogleTask(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
