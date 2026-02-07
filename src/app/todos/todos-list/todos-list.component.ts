import { Component, inject } from '@angular/core';
import { TodosListService } from '../todos-list.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cs-todos-list',
  imports: [],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.less'
})
export class TodosListComponent {

    todoListService = inject(TodosListService);

    // toSignal konwertuje Observable na sygnał Angulara
    // dzięki czemu można go używać w szablonach i innych częściach aplikacji
    // oraz automatycznie reaguje na zmiany danych
    // tutaj pobieramy listę zadań z serwisu i konwertujemy na sygnał
    // typ any[] jest użyty dla uproszczenia, w praktyce warto zdefiniować odpowiedni interfejs
    // dla zadań
    
    ngOnInit(): void {
    const todoListServiceWithTodos = this.todoListService.getTodos();
    console.log('Pobrane zadania:', todoListServiceWithTodos);
  }
        
    // tutaj tworzymy sygnał, który będzie przechowywał listę zadań pobranych z serwisu w formie 
    // kontenera sygnału, dzięki czemu można go łatwo używać w szablonach i innych częściach aplikacji
    todosSignal = toSignal<any>(this.todoListService.getTodos());
    
}
