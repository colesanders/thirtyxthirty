import { Component, OnInit } from '@angular/core';
import { Fruit } from '@thirty/api-interfaces';
import { FruitService } from '@thirty/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'thirty-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  title = 'Fruits';
  selectedFruit: Fruit;
  fruit$: Observable<Fruit[]>;

  constructor(private fruitsService: FruitService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteFruit(fruit:Fruit) {
    this.fruitsService.deleteFruit(fruit)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveFruit(fruit: Fruit) {
    if(fruit.id !== null){
      this.fruitsService.updateFruit(fruit)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.fruitsService.createFruit(fruit)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadFruits();
    this.resetForm();
  }

  resetForm(){
    this.selectFruit(this.getBlankFruit());
  }

  selectFruit(fruit: Fruit) {
    this.selectedFruit = {...fruit};
  }

  loadFruits(): void{
    this.fruit$ = this.fruitsService.getFruits();
  }
  getBlankFruit() {
    return {
      id: null,
      name: "",
      description: "",
      color: "",
      favorite : false,
      amount : 0,
    }
  }

}
