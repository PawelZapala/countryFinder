import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from './domain/Country';

const BASE_URL = 'https://restcountries.eu/rest/v2';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  getCountryByName(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.httpClient.get<Country[]>(`${BASE_URL}/name/${country.name}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountryByCapital(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.httpClient.get<Country[]>(`${BASE_URL}/capital/${country.capital}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountryByCurrency(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.httpClient.get<Country[]>(`${BASE_URL}/currency/${country.currencies}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getCountryByLanguage(country: Country): Observable<Country[]> {
    // @ts-ignore
    return this.httpClient.get<Country[]>(`${BASE_URL}/lang/${country.languages}`, JSON.stringify(country), HTTP_OPTIONS);
  }

  getBorderCountry(nameBorder: string): Observable<Country> {
    // @ts-ignore
    return this.httpClient.get<Country>(`${BASE_URL}/alpha/${nameBorder}`);
  }

  getCountry(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL}/name/${name}`);
  }

}
