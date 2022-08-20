import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlientiTableComponent } from './klienti-table/klienti-table.component';
import { KlientiComponent } from './klienti/klienti.component';
import { PoradciTableComponent } from './poradci-table/poradci-table.component';
import { PoradciComponent } from './poradci/poradci.component';
import { SmlouvyTableComponent } from './smlouvy-table/smlouvy-table.component';

const routes: Routes = [
  { path: 'klienti-table', component: KlientiTableComponent},
  { path: 'smlouvy-table', component: SmlouvyTableComponent},
  { path: 'poradci-table', component: PoradciTableComponent},
  { path: 'klienti/:id', component: KlientiComponent},
  { path: 'poradci/:id', component: PoradciComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
