import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-currency',
  templateUrl: './search-by-currency.component.html',
  styleUrls: ['./search-by-currency.component.css']
})
export class SearchByCurrencyComponent implements OnInit {
  findCountryForm: FormGroup;
  @Input() country: Country;
  countryList: Country[] = [];
  countryNumber: number;

  constructor(private apiHttp: ApiHttpService,
              private builder: FormBuilder) { }

  ngOnInit(): void {
    this.makeForm();
  }

  // tslint:disable-next-line:typedef
  makeForm() {
    // @ts-ignore
    this.findCountryForm = this.builder.group({
      currencies: ['', Validators.required]
    });
  }

  getCountryByCurrency(): void {
    console.log('start');
    this.apiHttp.getCountryByCurrency(this.findCountryForm.value).subscribe(country => {
        this.countryList = country;
        this.countryNumber = country.length;
        this.findCountryForm.reset();
      }
    );
  }
}
