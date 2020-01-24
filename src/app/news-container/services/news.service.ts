import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchConfig, SearchTypes } from '../../../../config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'https://newsapi.org/v2/';
  apiKey = 'f9233c46cce64a0fb1733f176e1513ae';
  apiKeyPrefix = `&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {

  }

  getNews(category: SearchConfig) {
    const value = category.value.trim();
    const isSearchQuery = category.category === SearchTypes.QUERY;
    const urlPrefix = isSearchQuery ? `?q=${value}` : `?country=il&category=${value}`;
    return this.http.get(`${this.baseUrl}${isSearchQuery ? 'everything' : 'top-headlines'}${urlPrefix}${this.apiKeyPrefix}`);
  }
}
