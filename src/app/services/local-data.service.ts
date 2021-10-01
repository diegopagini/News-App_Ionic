import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  public news: Article[] = [];

  constructor(private storage: Storage) {
    this.createDataBase();
    this.getNews();
  }

  public createDataBase() {
    this.storage.create();
  }

  public setNews(news: Article) {
    const exists = this.news.find((article) => article.title === news.title);
    if (!exists) {
      this.news.unshift(news);
      this.storage.set('favourite', this.news);
    }
  }

  public async getNews() {
    const favourites = await this.storage.get('favourite');
    this.news = favourites;
  }
}
