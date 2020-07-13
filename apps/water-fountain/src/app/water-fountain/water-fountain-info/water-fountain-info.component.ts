import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WaterFountain } from '@thirty/api-interfaces';
import {FormGroup } from '@angular/forms';

//import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

@Component({
  selector: 'thirty-water-fountain-info',
  templateUrl: './water-fountain-info.component.html',
  styleUrls: ['./water-fountain-info.component.scss']
})
export class WaterFountainInfoComponent implements OnInit {
  @Input() waterFountainForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  starDisplay: number[];
  

  constructor() { }

  ngOnInit(): void {
    this.starDisplay = [1,1,1,1,1];
  }
}
