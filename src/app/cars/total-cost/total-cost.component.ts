import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cs-total-cost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  @Input() totalCost: number = 0;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT : number = 1.23;

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}
