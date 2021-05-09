import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SearchByCapitalComponent} from './search-by-capital/search-by-capital.component';
import {SearchByCurrencyComponent} from './search-by-currency/search-by-currency.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import {ResultComponent} from './result/result.component';
import {MainPaigeComponent} from './main-paige/main-paige.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchByNameComponent,
    SearchByCapitalComponent,
    SearchByCurrencyComponent,
    CountryDetailsComponent,
    ResultComponent,
    MainPaigeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
