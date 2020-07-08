import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '@thirty/api-interfaces';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  @Input() carForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
}
