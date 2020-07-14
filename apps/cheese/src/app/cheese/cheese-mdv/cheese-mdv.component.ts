import { Component, OnInit } from '@angular/core';
import { Cheese } from '@thirty/api-interfaces';
import { CheeseService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CheeseComponent } from '../cheese.component';

@Component({
  selector: 'thirty-cheese-mdv',
  templateUrl: './cheese-mdv.component.html',
  styleUrls: ['./cheese-mdv.component.scss']
})
export class CheeseMDVComponent implements OnInit {

  title = 'Cheese Store';
  selectedCheese: Cheese;
  cheeseForm: FormGroup
  cheese$: Observable<Cheese[]>;

  constructor(private cheeseComponent: CheeseComponent,private cheeseService: CheeseService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.creatFormGroup();
    this.refresh();
  }

  getSelectedId(){
    return this.selectedCheese.id;
  }

  deleteCheese(cheese:Cheese) {
    this.cheeseService.deleteCheese(cheese)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveCheese() {
    const cheese = this.cheeseForm.value;

    this.snackBarService.openSnackBar("Cheese Saved!", "Okay", 2000)

    if(cheese.id !== null){
      this.cheeseService.updateCheese(cheese)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.cheeseService.createCheese(cheese)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadCheeses();
    this.resetForm();
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

  resetForm() {
    this.cheeseForm.patchValue({});
  }

  selectCheese(cheese: Cheese) {
    this.cheeseForm.patchValue(cheese);
    this.cheeseComponent.updateLinks(cheese.id);
  }

  loadCheeses(): void{
    this.cheese$ = this.cheeseService.getCheeses();
  }

}
