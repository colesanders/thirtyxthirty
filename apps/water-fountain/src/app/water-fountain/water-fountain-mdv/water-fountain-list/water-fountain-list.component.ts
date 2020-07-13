import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaterFountain } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-water-fountain-list',
  templateUrl: './water-fountain-list.component.html',
  styleUrls: ['./water-fountain-list.component.scss']
})
export class WaterFountainListComponent implements OnInit {
  @Input() waterFountains: [WaterFountain];
  @Output() selected = new EventEmitter<WaterFountain>();
  @Output() deleted = new EventEmitter<WaterFountain>();
  constructor() { }

  ngOnInit(): void {
  }

}
