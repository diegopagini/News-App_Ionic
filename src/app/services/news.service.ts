import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TopHeadlines } from '../interfaces/interface';

const apiKey: string = environment.apiKey;
const apiUrl: string = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getTopHeadlines(): Observable<TopHeadlines> {
    return this.http.get<TopHeadlines>(
      `${apiUrl}/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`
    );
  }

  public getTopHeadlinesCategories(category: string): Observable<TopHeadlines> {
    return this.http.get<TopHeadlines>(
      `${apiUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
  }
}
