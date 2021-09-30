import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TopHeadlines } from 'src/app/interfaces/interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  public news$: Observable<TopHeadlines>;
  public categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.segment.value = this.categories[0];

    this.news$ = this.newsService.getTopHeadlinesCategories('business');
  }

  public categoryChange(event) {
    this.news$ = this.newsService.getTopHeadlinesCategories(event.detail.value);
  }
}
