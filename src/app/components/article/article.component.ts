import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() index: number;
  @Input() favouritesPage: boolean;

  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private localDataService: LocalDataService
  ) {}

  public openArticle() {
    this.iab.create(this.article.url, '_system');
  }

  public async openMenu() {
    let saveOrDeleteButton;
    if (this.favouritesPage) {
      saveOrDeleteButton = {
        text: 'Remove',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.localDataService.deleteNews(this.article);
        },
      };
    } else {
      saveOrDeleteButton = {
        text: 'Favorite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.localDataService.setNews(this.article);
        },
      };
    }

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.socialSharing.share(
              this.article.title,
              this.article.source.name,
              null,
              this.article.url
            );
          },
        },
        saveOrDeleteButton,
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
