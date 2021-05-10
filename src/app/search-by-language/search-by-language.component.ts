import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-language',
  templateUrl: './search-by-language.component.html',
  styleUrls: ['./search-by-language.component.css']
})
export class SearchByLanguageComponent implements OnInit {
  findCountryForm: FormGroup;
  @Input() country: Country;
  countryList: Country[] = [];

  constructor(private apiHttp: ApiHttpService,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.makeForm();
  }

  // tslint:disable-next-line:typedef
  makeForm() {
    // @ts-ignore
    this.findCountryForm = this.builder.group({
        language: ['', Validators.required]
      }
    );
  }

  getCountryByLanguage(): void {
    this.apiHttp.getCountryByLanguage(this.findCountryForm.value).subscribe(country => {
        this.countryList = country;
        this.findCountryForm.reset();
      }
    );
  }
}
