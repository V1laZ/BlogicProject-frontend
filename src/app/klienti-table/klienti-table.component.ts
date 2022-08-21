import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-klienti-table',
  templateUrl: './klienti-table.component.html',
  styleUrls: ['./klienti-table.component.css']
})
export class KlientiTableComponent implements OnInit {
  klients = [{id: '', jmeno: '', prijmeni: '', email: '', tel_cislo: '', rod_cislo: '', vek: ''}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients = () => {
    this.api.getAllClients().subscribe(
      { 
        next: (data) => this.klients = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

}