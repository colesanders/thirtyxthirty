import { Component, OnInit } from '@angular/core';
import { WaterFountain } from '@thirty/api-interfaces';
import { SnackBarService } from '@thirty/core-data';

@Component({
  selector: 'thirty-water-fountain',
  templateUrl: './water-fountain.component.html',
  styleUrls: ['./water-fountain.component.scss']
})
export class WaterFountainComponent implements OnInit {
  title = 'WaterFountain Store';

  links = [
    { path: 'mdv', title: 'Master Detail View' },
    { path: '404', title: 'Single Detail View' },
  ];

  constructor(public snackBarService: SnackBarService) { }

  ngOnInit(): void {
  }

}
