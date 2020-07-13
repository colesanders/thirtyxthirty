import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaterFountain } from '@thirty/api-interfaces';


@Component({
  selector: 'thirty-water-fountain-info',
  templateUrl: './water-fountain-info.component.html',
  styleUrls: ['./water-fountain-info.component.scss']
})
export class WaterFountainInfoComponent implements OnInit {
  @Input() waterFountainForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  dropDisplay: number[];
  

  constructor() { }

  ngOnInit(): void {
    this.dropDisplay = [1,1,1,1,1];
  }
}
