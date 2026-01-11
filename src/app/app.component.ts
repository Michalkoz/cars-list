import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

}
