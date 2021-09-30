import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopHeadlines } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getTopHeadlines(): Observable<TopHeadlines> {
    return this.http.get<TopHeadlines>(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=74734e91acae495886628fefc78ae596`
    );
  }
}
