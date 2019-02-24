import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
