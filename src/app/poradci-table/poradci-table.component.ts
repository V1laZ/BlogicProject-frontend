import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poradci-table',
  templateUrl: './poradci-table.component.html',
  styleUrls: ['./poradci-table.component.css']
})
export class PoradciTableComponent implements OnInit {
  poradci = [{id: '', jmeno: '', prijmeni: '', email: '', tel_cislo: '', rod_cislo: '', vek: ''}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllPoradces();
  }

  getAllPoradces = () => {
    this.api.getAllPoradces().subscribe(
      { 
        next: (data) => this.poradci = data,
        error: (error) => console.log(error)
      }
    )
  }

}
