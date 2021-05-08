import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPaigeComponent } from './main-paige/main-paige.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByCurrencyComponent } from './search-by-currency/search-by-currency.component';
import { SearchByCapitalComponent } from './search-by-capital/search-by-capital.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPaigeComponent,
    SearchByNameComponent,
    SearchByCurrencyComponent,
    SearchByCapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
