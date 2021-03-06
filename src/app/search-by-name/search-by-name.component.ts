import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
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
        name: ['', Validators.required]
      }
    );
  }

  getCountryByName(): void {
    this.apiHttp.getCountryByName(this.findCountryForm.value).subscribe(country => {
        this.countryList = country;
        this.countryNumber = country.length;
        this.findCountryForm.reset();
      }
    );
  }

}
