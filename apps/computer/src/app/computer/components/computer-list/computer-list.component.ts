import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})
export class ComputerListComponent implements OnInit {
  @Input() computers: [Computer];
  @Output() selected = new EventEmitter<Computer>();
  @Output() deleted = new EventEmitter<Computer>();
  constructor() { }

  ngOnInit(): void {
  }

}
