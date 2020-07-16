import { Component, OnInit, OnChanges } from '@angular/core';
import { Computer } from '@thirty/api-interfaces';
import { ComputerService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'thirty-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit{
  title = 'Computer Store';
  computers$: Observable<Computer[]>;
  computer$: Observable<Computer>;

  links = [
    { path: ['/computer'], title: 'Home' },
    { path: ['/computer', 0], title: 'Topping Manager' }
  ];

  constructor(private router: Router,
    private computerService: ComputerService, 
    public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteComputer(computer:Computer) {
    this.computerService.deleteComputer(computer)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveComputer(computer: Computer) {
    this.snackBarService.openSnackBar("Computer Saved!", "Okay", 2000)

    computer.extras = this.computerService.extras;

    console.log(this.computerService.extras);
    console.log(computer);

    if(computer.id !== null){
      this.computerService.updateComputer(computer)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.computerService.createComputer(computer)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadComputers();
  }

  selectComputer(computer: Computer) {
    this.links[1].path = ['/computer', computer.id];
    this.computerService.setComputerById(computer.id);
    this.computer$ = this.computerService.computer$;
    this.router.navigate(this.links[1].path);
  }

  loadComputers(): void{
    this.computers$ = this.computerService.getComputers();
  }

  cancel(){
    this.links[1].path = ['/computer', 0];
    this.router.navigate(this.links[0].path);
    this.computerService.setComputerBlank();
  }
}
