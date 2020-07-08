import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '@thirty/api-interfaces';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-fruit-info',
  templateUrl: './fruit-info.component.html',
  styleUrls: ['./fruit-info.component.scss']
})
export class FruitInfoComponent implements OnInit {
  @Input() fruitForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
}
