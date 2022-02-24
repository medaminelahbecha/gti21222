import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../todo/model/todo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (todos) => {
        console.log(todos);
      }
    )
  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
