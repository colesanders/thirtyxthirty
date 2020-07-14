import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cheese } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-cheese-list',
  templateUrl: './cheese-list.component.html',
  styleUrls: ['./cheese-list.component.scss']
})
export class CheeseListComponent implements OnInit {
  @Input() cheeses: [Cheese];
  @Output() selected = new EventEmitter<Cheese>();
  @Output() deleted = new EventEmitter<Cheese>();
  constructor() { }

  ngOnInit(): void {
  }

}
