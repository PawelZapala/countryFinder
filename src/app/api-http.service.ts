import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryDetails} from './domain/CountryDetails';
import {Observable} from 'rxjs';

const BASE_URL = 'https://restcountries.eu/rest/v2';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  getCountryByName(country: CountryDetails): Observable<CountryDetails[]>{
    return this.httpClient.get<CountryDetails[]>(`${BASE_URL}/name/${country.name}`, JSON.stringfy(country), HTTP_OPTIONS);
  }


}
