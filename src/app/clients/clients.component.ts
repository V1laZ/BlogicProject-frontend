import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, OnDestroy {
  id: number = 0;
  client_data = {id: '', first_name: '', last_name: '', email: '', phone: '', PIN: '', age: ''};
  private sub: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.getClient();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getClient = () => {
    this.api.getClient(this.id).subscribe(
      { 
        next: (data) => this.client_data = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

}
