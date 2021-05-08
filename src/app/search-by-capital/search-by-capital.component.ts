import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {CountryDetails} from '../domain/CountryDetails';

@Component({
  selector: 'app-search-by-capital',
  templateUrl: './search-by-capital.component.html',
  styleUrls: ['./search-by-capital.component.css']
})
export class SearchByCapitalComponent implements OnInit {
  countryDetails: CountryDetails[] = [];

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }

}
