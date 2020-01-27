import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsFeedApp';
  selectedCategory = 'sports';
  queryString = '';

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  onSetSearchQuery(queryText: string) {
    this.queryString = queryText;
  }

  formValue(event){
    console.log(event);
  }

}
