import { Component, Input } from '@angular/core';
import { TopHeadlines } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: TopHeadlines;
}
