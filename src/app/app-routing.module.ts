import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchByCapitalComponent} from './search-by-capital/search-by-capital.component';
import {SearchByCurrencyComponent} from './search-by-currency/search-by-currency.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {MainPaigeComponent} from './main-paige/main-paige.component';
import {SearchByLanguageComponent} from './search-by-language/search-by-language.component';

const  routes: Routes = [
  {path: '', component: MainPaigeComponent},
  {path: 'country-details/:name', component: CountryDetailsComponent},
  {path: 'search-by-name', component: SearchByNameComponent},
  {path: 'search-by-capital', component: SearchByCapitalComponent},
  {path: 'search-by-currency', component: SearchByCurrencyComponent},
  {path: 'search-by-language', component: SearchByLanguageComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
