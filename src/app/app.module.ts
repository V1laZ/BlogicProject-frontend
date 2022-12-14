import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { AdvisorsTableComponent } from './advisors-table/advisors-table.component';
import { ContractsTableComponent } from './contracts-table/contracts-table.component';
import { AddAdvisorComponent } from './add-advisor/add-advisor.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddContractComponent } from './add-contract/add-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsTableComponent,
    ContractsTableComponent,
    AdvisorsTableComponent,
    ClientsComponent,
    AdvisorsComponent,
    LoginComponent,
    WelcomeComponent,
    ClientsComponent,
    ClientsTableComponent,
    AdvisorsComponent,
    AdvisorsTableComponent,
    ContractsTableComponent,
    AddAdvisorComponent,
    AddClientComponent,
    AddContractComponent
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
