import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NewsComponent, ArticleComponent, SpinnerComponent],
  imports: [IonicModule, CommonModule],
  exports: [NewsComponent, ArticleComponent, SpinnerComponent],
})
export class ComponentsModule {}
