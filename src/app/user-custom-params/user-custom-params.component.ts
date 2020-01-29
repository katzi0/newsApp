import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../news-container/services/news.service';

@Component({
  selector: 'app-user-custom-params',
  templateUrl: './user-custom-params.component.html',
  styleUrls: ['./user-custom-params.component.scss']
})
export class UserCustomParamsComponent implements OnInit {
  private fb: FormBuilder;
  formController: FormGroup;
  @Output()
  formValue = new EventEmitter();
  db = []

  constructor(fb: FormBuilder, private newsService:NewsService) {
    this.fb = fb;
  }

  ngOnInit() {
    this.formController = this.fb.group({
      country: null,
      category: null,
      query: null,
    })
    this.db = this.newsService.getUserQueryDb();
  }

  onSubmit() {
    this.formValue.emit(this.formController.value)
    this.newsService.saveUserQueries(this.formController.value)
    this.resetForm();
  }
  resetForm(){
    this.formController.reset()
  }

}
