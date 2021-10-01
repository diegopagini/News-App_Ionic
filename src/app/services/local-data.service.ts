import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  public news: Article[] = [];

  constructor(private toastController: ToastController) {
    this.getNews();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  public setNews(news: Article) {
    const exists = this.news.find((article) => article.title === news.title);
    if (!exists) {
      this.news.unshift(news);
      localStorage.setItem('favourite', JSON.stringify(this.news));
      this.presentToast('Added to favorite');
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
    this.presentToast('Removed from favorites');
  }
}
