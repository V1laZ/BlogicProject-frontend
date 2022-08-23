import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    let token: string | null = "";
    token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token as string);
    if (decodedToken) {
      const exp = decodedToken['exp'];
      let date = new Date();
      let time = +(date.getTime().toString().slice(0, -3));
      if (time > exp) {
        this.logout()
      }
      else {
        this.authService.isLogin = true;
      }
    }
  }

  logout() {
    this.authService.isLogin = false;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
