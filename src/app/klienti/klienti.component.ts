import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-klienti',
  templateUrl: './klienti.component.html',
  styleUrls: ['./klienti.component.css']
})
export class KlientiComponent implements OnInit, OnDestroy {
  id: number = 0;
  client_data = {id: '', jmeno: '', prijmeni: '', email: '', tel_cislo: '', rod_cislo: '', vek: ''};
  private sub: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { 
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
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
        error: (error) => console.log(error)
      }
    )
  }

}
