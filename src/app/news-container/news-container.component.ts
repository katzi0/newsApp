import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsService } from './services/news.service';
import { catchError, concatMap, map, timeout, tap } from 'rxjs/operators';
import { Article } from '../types';
import { Observable, of } from 'rxjs';
import { testArticles } from './stubData';
import { SearchConfig, SearchTypes } from '../../../config';


@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss'],
})
export class NewsContainerComponent implements OnChanges {
  public articles$: Observable<[Article]>;
  public hackerNewsArticelsIds$: Observable<[number]>;
  public hackerNewsArticels$: Observable<[any]>;
  @Input() selectedCategory = '';
  @Input() queryString;
  isLoading = false;
  searchValue: SearchConfig = {
    category: SearchTypes.CATEGORY,
    value: 'sports'
  };

  constructor(private newsService: NewsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach(key => {
      if (changes[key].currentValue.length && changes[key].currentValue !== changes[key].previousValue) {
        this.searchValue = {
          category: key,
          value: changes[key].currentValue,
        };
      }
    });
    this.getArticles();
  }

  getArticles() {
    this.isLoading = true;
    this.articles$ = this.newsService.getNews(this.searchValue)
      .pipe(
        timeout(3000),
        catchError((e) => (of(testArticles))),
        map((result: any) => result.articles),
        tap(() => this.isLoading = false));
  }


}
