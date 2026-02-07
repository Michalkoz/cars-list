import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosListService {

  httpClient = inject(HttpClient);
     
  getTodos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
