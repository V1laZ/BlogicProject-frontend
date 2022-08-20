import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poradci',
  templateUrl: './poradci.component.html',
  styleUrls: ['./poradci.component.css']
})
export class PoradciComponent implements OnInit {
  id: number = 0;
  poradce_data = {id: '', jmeno: '', prijmeni: '', email: '', tel_cislo: '', rod_cislo: '', vek: ''};
  private sub: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { 
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    })

    this.getPoradce();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPoradce = () => {
    this.api.getPoradce(this.id).subscribe(
      { 
        next: (data) => this.poradce_data = data,
        error: (error) => console.log(error)
      }
    )
  }
}
