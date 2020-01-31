import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../news-container/services/news.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from '../actions/counter.actions';
import { UserQuery } from '../types';
import { loadCustomParamss } from '../actions/custom-params.actions';

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
  customParamsFields$: Observable<UserQuery>

  constructor(
    fb: FormBuilder,
    private newsService: NewsService,
    private store: Store<{ count: UserQuery }>
  ) {
    this.fb = fb;
    this.customParamsFields$ = this.store.pipe(select('customParamsReducer'))
  }

  ngOnInit() {
    this.formController = this.fb.group({
      country: null,
      category: null,
      query: null,
    })
    this.db = this.newsService.getUserQueryDb();
    this.store.dispatch(loadCustomParamss())
  }

  onSubmit() {
    this.formValue.emit(this.formController.value)
    this.newsService.saveUserQueries(this.formController.value)
    this.resetForm();
  }
  resetForm() {
    this.formController.reset()
  }

  increment(){
    this.store.dispatch(increment());
  }

}
