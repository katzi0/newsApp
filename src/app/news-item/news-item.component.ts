import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() article;
  constructor() { }

  ngOnInit() {
  }
  getIsBandwithFast() {
    const test: any = window.navigator;
    // return test.connection.downlink >= 1;
    return !!test.connection.downlink;
  }

  checkForNetworkAndImage() {
    if (this.article.urlToImage) {
      return this.getIsBandwithFast()
    }
    return false;
  }
}
