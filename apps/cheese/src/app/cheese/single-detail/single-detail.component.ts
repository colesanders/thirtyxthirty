import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cheese } from '@thirty/api-interfaces';
import { CheeseService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'thirty-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrls: ['./single-detail.component.scss']
})
export class SingleDetailComponent implements OnInit {
  title = 'Cheese Detail';
  cheeseForm: FormGroup

  constructor(private route: ActivatedRoute, private cheeseService: CheeseService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.creatFormGroup();
    this.getCheese();
  }

  getCheese(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cheeseService.getCheeseById(id)
    .subscribe( (cheese) => {
      this.cheeseForm.patchValue(cheese);
    })
  }

  deleteCheese(cheese:Cheese) {
    this.cheeseService.deleteCheese(cheese)
    .subscribe( m => {
      this.getCheese();
    });
  }

  saveCheese() {
    const cheese = this.cheeseForm.value;

    this.snackBarService.openSnackBar("Cheese Saved!", "Okay", 2000)

    if(cheese.id !== null){
      this.cheeseService.updateCheese(cheese)
      .subscribe( m => {
        this.getCheese();
      });
    } else {
      this.cheeseService.createCheese(cheese)
      .subscribe( m => {
        this.getCheese();
      });
    }
  }

  creatFormGroup(){
    this.cheeseForm = this.formBuilder.group({
      id: [],

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      rating: new FormControl(1, [
      ]),
      tags: new FormControl('', [
      ]),
      price: new FormControl(0, [
        Validators.required,
      ]),
    })
  }
}
