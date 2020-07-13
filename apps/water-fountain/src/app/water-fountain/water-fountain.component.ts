import { Component, OnInit } from '@angular/core';
import { WaterFountain } from '@thirty/api-interfaces';
import { WaterFountainService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'thirty-water-fountain',
  templateUrl: './water-fountain.component.html',
  styleUrls: ['./water-fountain.component.scss']
})
export class WaterFountainComponent implements OnInit {
  title = 'WaterFountain Store';
  selectedWaterFountain: WaterFountain;
  waterFountainForm: FormGroup
  waterFountain$: Observable<WaterFountain[]>;

  constructor(private waterFountainService: WaterFountainService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.creatFormGroup();
    this.refresh();
  }

  deleteWaterFountain(waterFountain:WaterFountain) {
    this.waterFountainService.deleteWaterFountain(waterFountain)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveWaterFountain() {
    const waterFountain = this.waterFountainForm.value;

    this.snackBarService.openSnackBar("WaterFountain Saved!", "Okay", 2000)

    if(waterFountain.id !== null){
      this.waterFountainService.updateWaterFountain(waterFountain)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.waterFountainService.createWaterFountain(waterFountain)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadWaterFountains();
    this.resetForm();
  }

  creatFormGroup(){
    this.waterFountainForm = this.formBuilder.group({
      id: [],

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      pressure: new FormControl(0, [
        Validators.required,
      ]),
      temperature: new FormControl(0, [
        Validators.required,
      ]),
      stars: new FormControl(1, [
        Validators.required,
      ]),
    })
  }

  resetForm() {
    this.waterFountainForm.patchValue({});
  }

  selectWaterFountain(waterFountain: WaterFountain) {
    this.waterFountainForm.patchValue(waterFountain);
  }

  loadWaterFountains(): void{
    this.waterFountain$ = this.waterFountainService.getWaterFountains();
  }

}
