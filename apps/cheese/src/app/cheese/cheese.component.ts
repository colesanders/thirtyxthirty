import { Component, OnInit } from '@angular/core';
import { Cheese } from '@thirty/api-interfaces';
import { SnackBarService, CheeseService } from '@thirty/core-data';

@Component({
  selector: 'thirty-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {
  title = 'Cheese Store';

  links = [
    { path: 'mdv', title: 'Master Detail View' },
    { path: ['detail/', ''+1], title: 'Single Detail View' },
  ];

  selectedId: number;

  constructor(public snackBarService: SnackBarService, private cheeseService: CheeseService) { }

  ngOnInit(): void {
  }

  updateLinks(id){
    this.selectedId = id;
    this.links[1].path = ['detail/', id];
  }

}
