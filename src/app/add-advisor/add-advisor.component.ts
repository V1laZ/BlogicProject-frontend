import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-advisor',
  templateUrl: './add-advisor.component.html',
  styleUrls: ['./add-advisor.component.css']
})
export class AddAdvisorComponent implements OnInit {

  error = false;

  constructor(private api: ApiService, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  onSubmit(f: NgForm) {
    const formValues = f.value;
    this.api.addAdvisor(formValues['first_name'], formValues['last_name'], formValues['email'], formValues['phone'], formValues['pin'], formValues['age']).subscribe({
      next: () => {
        this.error = false;
        this.router.navigate(['/advisors-table']);
      },
      error: (error) => {
        this.error = true;
      }
    });
  }

}
