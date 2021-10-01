import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public favourites: Article[];

  constructor(private localDataService: LocalDataService) {}

  ngOnInit(): void {
    this.favourites = this.localDataService.news;
  }
}
