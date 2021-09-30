import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser) {}

  public openArticle() {
    this.iab.create(this.article.url, '_system');
  }
}
