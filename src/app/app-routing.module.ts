import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContractsTableComponent } from './contracts-table/contracts-table.component';
import { AdvisorsTableComponent } from './advisors-table/advisors-table.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { AddAdvisorComponent } from './add-advisor/add-advisor.component';
import { AddClientComponent } from './add-client/add-client.component';

const routes: Routes = [
  { path: 'clients-table', component: ClientsTableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contracts-table', component: ContractsTableComponent},
  { path: 'advisors-table', component: AdvisorsTableComponent},
  { path: 'clients/:id', component: ClientsComponent},
  { path: 'advisors/:id', component: AdvisorsComponent},
  { path: 'add-advisor', component: AddAdvisorComponent},
  { path: 'add-client', component: AddClientComponent},
  { path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
