import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { NotifierService } from '../notifier.service';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards:any = [];
  

  constructor(public goods_category_data: GoodsCategoryDataService, public router: Router,
     public translate: TranslateService) { }

  ngOnInit() {
    this.renderComponent()
    this.forTranslate();
  }

  renderComponent(){
    this.goods_category_data.getTodaysSaleUrl()
    .subscribe(
      response => {
        this.cards = response;
        // this.dataSource.paginator = this.paginator;
        // this.goods.forEach((a:any) => {
        //   Object.assign(a, {quantity: 1, total: a.price});
        // })

      },
      error => {
        console.log(error)

      }
    )
  }
  forTranslate() {
    this.translate.addLangs(['en', 'ru', 'fr']);
    this.translate.setDefaultLang('fr');
    const lang = localStorage.getItem('language') || 'en'
    this.translate.use(lang);
  }

  goToGoodsCategory(link:any){
 this.router.navigateByUrl(link);
  }
}