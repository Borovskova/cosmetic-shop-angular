import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { NotifierService } from '../notifier.service';
import { GoodsCategoryDataService } from '../goods-category-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards:any = [];
  

  constructor(public goods_category_data: GoodsCategoryDataService,) { }

  ngOnInit() {
    this.renderComponent()
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
}