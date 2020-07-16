import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Computer } from '@thirty/api-interfaces';
import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService, SnackBarService } from '@thirty/core-data';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'thirty-computer-overview',
  templateUrl: './computer-overview.component.html',
  styleUrls: ['./computer-overview.component.scss']
})
export class ComputerOverviewComponent implements OnInit, OnChanges {
  computerForm: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private computerService: ComputerService) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.getComputer();
  }

  ngOnChanges(): void{
    this.getComputer();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    //add extras
    if ((value || '').trim()) {
      this.computerForm.value.extras.push(value.trim() + '');
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.computerService.extras = this.computerForm.value.extras;
  }

  remove(extra): void {
    const index = this.computerForm.value.extras.indexOf(extra);

    if (index >= 0) {
      this.computerForm.value.extras.splice(index, 1);
    }
  }


  getComputer(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if(id === 0){
      this.resetForm();
    } else {
      this.computerService.computer$
      .subscribe( (computer) => {
        this.computerForm.patchValue(computer);
      })
    }
    
  }

  saveComputer() {
    const computer = this.computerForm.value;

    this.snackBarService.openSnackBar("Saved Toppings To Current Computer!", "Okay", 2000)

    this.computerService.extras = this.computerForm.value.extras;
    this.router.navigate(['/computer']);
  }

  createFormGroup(){
    this.computerForm = this.formBuilder.group({
      extras: new FormControl(['None'], [
      ]),
    })
  }

  resetForm() {
    this.computerForm.value.extras = ['None'];
    this.computerService.extras = this.computerForm.value.extras;
  }

}
