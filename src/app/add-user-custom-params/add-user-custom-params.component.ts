import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-custom-params',
  templateUrl: './add-user-custom-params.component.html',
  styleUrls: ['./add-user-custom-params.component.scss']
})
export class AddUserCustomParamsComponent implements OnInit {

  country = new FormControl('')
  category = new FormControl('')
  query = new FormControl('')

  constructor() { }

  ngOnInit() {
  }

}
