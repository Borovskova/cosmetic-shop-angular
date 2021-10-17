import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { FilteredGoodsService } from '../filtered-goods.service';

@Component({
  selector: 'app-mascara',
  templateUrl: './mascara.component.html',
  styleUrls: ['./mascara.component.css']
})
export class MascaraComponent {
  
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [];
  //     }
  //     return [];
  //   })
  // );
   //cards:any = [];
   url:any='http://localhost:3000/images/';


  constructor(private breakpointObserver: BreakpointObserver,
    public goods_category_data: GoodsCategoryDataService,  public filtered_goods: FilteredGoodsService) { }

  ngOnInit() {
    this.goods_category_data.getGuestMascaraUrl()
      .subscribe(
        response => {
          //this.filtered_goods.searchFilteredGoods(this.filtered_goods.mascaras)
          this.filtered_goods.cards = response;
        },
        error => {
          console.log(error)

        }
      )
  }

  getImage(img: string): string {
    return ('http://localhost:3000/images/' + img) ;
  }
}
