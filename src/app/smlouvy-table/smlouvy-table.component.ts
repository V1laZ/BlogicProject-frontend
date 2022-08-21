import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-smlouvy-table',
  templateUrl: './smlouvy-table.component.html',
  styleUrls: ['./smlouvy-table.component.css']
})
export class SmlouvyTableComponent implements OnInit {
  smlouvy = [{ev_cislo: '', instituce: '', klient: '', spravce: '', dat_uzavreni: '', dat_platnosti: '', dat_ukonceni: ''}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllSmlouvy();
  }

  getAllSmlouvy = () => {
    this.api.getAllSmlouvy().subscribe(
      { 
        next: (data) => this.smlouvy = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

}
