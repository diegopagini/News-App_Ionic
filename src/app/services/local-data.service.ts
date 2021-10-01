import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  public news: Article[] = [];

  constructor() {
    this.getNews();
  }

  public setNews(news: Article) {
    const exists = this.news.find((article) => article.title === news.title);
    if (!exists) {
      this.news.unshift(news);
      localStorage.setItem('favourite', JSON.stringify(this.news));
    }
  }

  public async getNews() {
    const favourites = await JSON.parse(localStorage.getItem('favourite'));
    if (!favourites) {
      this.news = favourites;
    }
  }

  public deleteNews(news: Article) {
    this.news = this.news.filter((article) => article.title !== news.title);
    localStorage.clear();
    localStorage.setItem('favourite', JSON.stringify(this.news));
    console.log(this.news);
  }
}
