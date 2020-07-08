import { Component, OnInit } from '@angular/core';
import { Fruit } from '@thirty/api-interfaces';
import { FruitService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'thirty-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  title = 'Fruits';
  selectedFruit: Fruit;
  fruitForm: FormGroup
  fruit$: Observable<Fruit[]>;

  constructor(private fruitsService: FruitService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteFruit(fruit:Fruit) {
    this.fruitsService.deleteFruit(fruit)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveFruit() {
    const fruit = this.fruitForm.value;

    this.snackBarService.openSnackBar("Fruit Saved!", "Okay", 2000)

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
    this.fruitForm = this.formBuilder.group({
      id: [],
      name : [''],
      description : [''],
      amount: ['0'],
      color: [''],
      favorite: [],
      icon: [''],
    })
  }

  selectFruit(fruit: Fruit) {
    this.fruitForm = this.formBuilder.group({
      id: [fruit.id],
      name: [fruit.name],
      description: [fruit.description],
      amount: [fruit.amount],
      color: [fruit.color],
      favorite: [fruit.favorite],
      icon: [fruit.icon],
    })
  }

  loadFruits(): void{
    this.fruit$ = this.fruitsService.getFruits();
  }

}
