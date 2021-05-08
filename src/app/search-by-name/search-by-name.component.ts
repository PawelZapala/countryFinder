import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {CountryDetails} from '../domain/CountryDetails';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  countryDetails: CountryDetails[] = [];

  constructor(private apiHttp: ApiHttpService, router: Router) { }

  ngOnInit(): void {
  }

}
