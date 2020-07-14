import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cheese } from '@thirty/api-interfaces';


@Component({
  selector: 'thirty-cheese-info',
  templateUrl: './cheese-info.component.html',
  styleUrls: ['./cheese-info.component.scss']
})
export class CheeseInfoComponent implements OnInit {
  @Input() cheeseForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  dropDisplay: number[];
  

  constructor() { }

  ngOnInit(): void {
    this.dropDisplay = [1,1,1,1,1];
  }
}
