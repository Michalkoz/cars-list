import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'cars-list',
  standalone: true,
  imports: [CommonModule, TotalCostComponent, ReactiveFormsModule],
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

  carForm: FormGroup;

  totalCost3: number = 0;
  grossCost: number = 0;
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
  constructor(private formBuilder : FormBuilder) {
    this.carForm = this.buildCarForm();

   }

  ngOnInit(): void {
    this.countTotalCost();

  }

  countTotalCost(): void {
    this.totalCost3 = this.cars
    .map(car => car.cost)
    .reduce((prev, next) => prev + next)
  }

  trackById(index: number, car: Car): number {
    return car.id;
  }
  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  buildCarForm(){
    return this.formBuilder.group({
       model: '',
      plate: '',
      deliveryDate: '',
      deadline: '',
      client: {
        firstName: '',
        surname: ''
      },
      cost: '',
      isFullyDamaged: ''
    })
  }
}
