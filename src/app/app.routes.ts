import { Routes } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AppComponent } from './app.component';

export const authGuard = () => {
    // tutaj można dodać logikę sprawdzającą, czy użytkownik jest uwierzytelniony
    // na potrzeby tego przykładu zawsze zwracamy true
    console.log('Auth guard sprawdza dostęp do trasy TodosListComponent');
    return true;
}

export const routes: Routes = [

    { path: 'todos', component: TodosListComponent, canActivate: [authGuard] },
    { path: '', component: AppComponent }
    // { path: '**', redirectTo: '/todos'}    

];
