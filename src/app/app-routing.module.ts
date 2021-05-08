import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPaigeComponent} from './main-paige/main-paige.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';
import {SearchByCurrencyComponent} from './search-by-currency/search-by-currency.component';
import {SearchByCapitalComponent} from './search-by-capital/search-by-capital.component';

const routes: Routes = [
  {path: '', component: MainPaigeComponent},
  {path: 'searchByName', component: SearchByNameComponent},
  {path: 'searchByCapital', component: SearchByCapitalComponent},
  {path: 'searchByCurrency', component: SearchByCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
