import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { HldsListComponent } from './hlds/hlds-list/hlds-list.component';
import { HldMiniFormComponent } from './hlds/hld-mini-form/hld-mini-form.component';
import { TodosListComponent } from "./todos/todos-list/todos-list.component";
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HldsListComponent, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

}
