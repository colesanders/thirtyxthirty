import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas: [Pizza];
  @Output() selected = new EventEmitter<Pizza>();
  @Output() deleted = new EventEmitter<Pizza>();
  constructor() { }

  ngOnInit(): void {
  }

}
