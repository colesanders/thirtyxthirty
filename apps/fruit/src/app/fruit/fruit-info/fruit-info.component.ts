import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '@thirty/api-interfaces';
@Component({
  selector: 'thirty-fruit-info',
  templateUrl: './fruit-info.component.html',
  styleUrls: ['./fruit-info.component.scss']
})
export class FruitInfoComponent implements OnInit {
  @Input() fruit: Fruit;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
