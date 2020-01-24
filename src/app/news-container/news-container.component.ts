import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsService } from './services/news.service';
import { catchError, concatMap, map, timeout } from 'rxjs/operators';
import { Article } from '../types';
import { Observable, of } from 'rxjs';
import { testArticles } from './stubData';
import { SearchConfig, SearchTypes } from '../../../config';


@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss'],
})
export class NewsContainerComponent implements OnInit, OnChanges {
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

  ngOnInit() {
    // const loadingIndicator$: Observable<boolean> = this.articles$.pipe(mapTo(false));
    this.getHackerNewsArticlesIds();
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

    // this.getArticles();
  }

  getArticles() {
    this.isLoading = true;
    this.articles$ = this.newsService.getNews(this.searchValue)
      .pipe(
        timeout(3000),
        catchError((e) => (of(testArticles))),
        map((result: any) => result.articles));
  }

  getHackerNewsArticlesIds() {
    this.hackerNewsArticelsIds$ = this.newsService.getHackerNewsArticlesIds().pipe(map((res: any) => res));
    this.hackerNewsArticelsIds$.pipe(
      concatMap((result: number[]) => (
        result.map((id) => this.getHackerNewsArticleById(id)
        ))))
      .subscribe(res => {
        console.log(res);
      });
  }

  getHackerNewsArticleById(id: number) {
    return this.newsService.getHackerNewsArticleById(id);
  }


  getIsBandwithFast() {
    const test: any = window.navigator;
    return test.connection.downlink >= 1;
  }
}
