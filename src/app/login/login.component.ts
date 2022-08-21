import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  username: FormControl;
  password: FormControl;
  isUsername = true;
  isPassword = true;
  isValid = true;
  errorMsg = "";

  constructor(private authService: AuthService, private router: Router) { 
    this.username = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)
    this.form = new FormGroup({
      username: this.username,
      password: this.password
    })
  }

  ngOnInit(): void {
  }

  storeDataAndRedirect(data: Object) {
    localStorage.setItem('token', Object(data)['access']);
    this.router.navigate(['/']);
  }

  login() {
    if (this.username.errors) this.isUsername = false;
    else this.isUsername = true;
    if (this.password.errors) this.isPassword = false;
    else this.isPassword = true;

    const formValues = this.form.value

    this.authService.get_token(formValues['username'], formValues['password']).subscribe(
      {
        next: (data) => this.storeDataAndRedirect(data),
        error: (error) => this.errorMsg = error.error['detail']
      }
    )

  }

}
