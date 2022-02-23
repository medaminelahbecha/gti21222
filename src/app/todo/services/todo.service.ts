import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";
import {Logger} from "../../services/logger";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private logger: Logger
  ) { }
  //Elle log la liste des todos
  loggerTodo(): void {
    this.logger.logger(this.todos);
  }
  // Ajouter un Todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  // retourne la liste des todos
  getTodos(): Todo[] {
    return this.todos;
  }
  // supprime un todo
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
