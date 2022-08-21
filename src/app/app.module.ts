import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KlientiTableComponent } from './klienti-table/klienti-table.component';
import { SmlouvyTableComponent } from './smlouvy-table/smlouvy-table.component';
import { PoradciTableComponent } from './poradci-table/poradci-table.component';
import { KlientiComponent } from './klienti/klienti.component';
import { PoradciComponent } from './poradci/poradci.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KlientiTableComponent,
    SmlouvyTableComponent,
    PoradciTableComponent,
    KlientiComponent,
    PoradciComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
