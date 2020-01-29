import { Component, OnInit, Input } from '@angular/core';
import * as countryList from 'country-list'
import { Country } from 'src/app/types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-param',
  templateUrl: './select-param.component.html',
  styleUrls: ['./select-param.component.scss']
})
export class SelectParamComponent implements OnInit {
  @Input()
  parentForm: FormGroup;
  @Input()
  title: string = ''
  options: Country[] = []
  constructor() { }

  ngOnInit() {
    const countryListObject = countryList.getNameList()
    this.options = Object.keys(countryListObject).map(key => ({ label: countryListObject[key], value: key }))
  }
}
