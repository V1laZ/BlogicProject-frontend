import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  error = false;

  constructor(private api: ApiService, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  onSubmit(f: NgForm) {
    const formValues = f.value;
    this.api.addClient(formValues['first_name'], formValues['last_name'], formValues['email'], formValues['phone'], formValues['pin'], formValues['age']).subscribe({
      next: () => {
        this.error = false;
        this.router.navigate(['/clients-table']);
      },
      error: (error) => {
        console.log(error);
        this.error = true;
      }
    });
  }
}
