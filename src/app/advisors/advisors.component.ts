import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent implements OnInit, OnDestroy {
  id: number = 0;
  advisor_data = {id: '', first_name: '', last_name: '', email: '', phone: '', PIN: '', age: ''};
  private sub: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.getAdvisor();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getAdvisor = () => {
    this.api.getAdvisor(this.id).subscribe(
      { 
        next: (data) => this.advisor_data = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

}
