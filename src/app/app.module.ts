import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KlientiTableComponent } from './klienti-table/klienti-table.component';
import { SmlouvyTableComponent } from './smlouvy-table/smlouvy-table.component';
import { PoradciTableComponent } from './poradci-table/poradci-table.component';
import { KlientiComponent } from './klienti/klienti.component';
import { PoradciComponent } from './poradci/poradci.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KlientiTableComponent,
    SmlouvyTableComponent,
    PoradciTableComponent,
    KlientiComponent,
    PoradciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
