import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = "";

  constructor() {
  }
  
  ngOnInit(): void {
    const helper = new JwtHelperService();
    let token: string | null = "";
    token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token as string);
    if (decodedToken) {
      this.name = decodedToken["user_id"]
    }
  }

  

}
