import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  @Input() fruits: [Fruit];
  @Output() selected = new EventEmitter<Fruit>();
  @Output() deleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
