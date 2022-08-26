import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  error = false;
  advisorsIDs: number[] = [];
  clientsIDs: number[] = [];

  constructor(private api: ApiService, private router: Router) { 
  }

  ngOnInit(): void {
    this.api.getAllAdvisors().subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          const e = data[i];
          this.advisorsIDs.push(e['id']);
        }
      }
    });

    this.api.getAllClients().subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          const e = data[i];
          this.clientsIDs.push(e['id']);
        }
      }
    });
    
  }

  onSubmit(f: NgForm) {
    const formValues = f.value;
    this.api.addContract(formValues['reg_num'], formValues['institution'], formValues['client'], formValues['manager'], formValues['date_close'], formValues['date_valid'], formValues['date_end']).subscribe({
      next: () => {
        this.error = false;
        this.router.navigate(['/contracts-table']);
      },
      error: (error) => {
        console.log(error);
        this.error = true;
      }
    });
    
  }
}
