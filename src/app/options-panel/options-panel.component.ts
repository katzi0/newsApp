import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OptionsConfig } from './optionsConfig';
import { NewsService } from '../news-container/services/news.service';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const stub = [
  {productA: 'productA'}, {productB: 'productB'}, {productC: 'productC'}
];

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent implements OnInit {
  optionsCategories = OptionsConfig;
  @Output() setCategory = new EventEmitter<string>();
  @Output() setSearchQuery = new EventEmitter<string>();
  public searchQuery = 'enter';
  private textQueryChange = new BehaviorSubject('123');

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.textQueryChange
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(query => {
        this.setSearchQuery.emit(query);
      });
  }

  onCategorySelected(category) {
    this.setCategory.emit(category);
  }

  onQueryChange(query) {
    this.textQueryChange.next(query);
  }
}
