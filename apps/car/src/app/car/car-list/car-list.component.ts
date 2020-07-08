import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  @Input() cars: [Car];
  @Output() selected = new EventEmitter<Car>();
  @Output() deleted = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void {
  }

}
