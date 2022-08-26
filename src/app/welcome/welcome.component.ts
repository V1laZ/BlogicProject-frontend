import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  navigationSubscription;
  name = "";

  constructor(private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
 
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

  initialiseInvites() {
    this.name = "";
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  } 


}
