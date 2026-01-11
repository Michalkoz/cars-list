import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { Car } from '../models/car';

@Component({
  selector: 'cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'XYZ 1234',
      deliveryDate: '2023-01-15',
      deadline: '2023-02-15',
      client: {
        firstName: 'John',
        surname: 'Doe'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Toyota Rx7',
      plate: 'ASD 1234',
      deliveryDate: '2023-01-15',
      deadline: '2023-02-15',
      client: {
        firstName: 'Jan',
        surname: 'Kowalsky'
      },
      cost: 1300,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: 'Ford 1.6',
      plate: 'KK 1234',
      deliveryDate: '2020-01-15',
      deadline: '2023-02-15',
      client: {
        firstName: 'Mary',
        surname: 'Poppins'
      },
      cost: 2222,
      isFullyDamaged: true
    }
  ]
  constructor() { }
  ngOnInit(): void {

}

  trackById(index: number, car: Car): number {
    return car.id;
  }
}
