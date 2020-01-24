export enum SearchTypes {
  QUERY = 'queryString',
  CATEGORY = 'selectedCategory',
}

export interface SearchConfig {
  category;
  value: string;
}
