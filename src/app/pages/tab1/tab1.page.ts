import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopHeadlines } from 'src/app/interfaces/interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public news$: Observable<TopHeadlines>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getTopHeadlines();
  }
}
