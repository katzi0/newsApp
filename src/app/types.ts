export interface Article {
  title: string;
  url: string;
}

export interface UserQuery {
  category:string;
  country: Country; 
  query: string;
}

export interface Country {
  label:string;
  value: string;
}