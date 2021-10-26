import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoodsCategoryDataService } from '../goods-category-data.service';

@Component({
  selector: 'app-decorative-cosmetics',
  templateUrl: './decorative-cosmetics.component.html',
  styleUrls: ['./decorative-cosmetics.component.css']
})
export class DecorativeCosmeticsComponent {

  goods: any = [];

  constructor(public router: Router, public goods_category_data: GoodsCategoryDataService) { }


  ngOnInit() {
    this.renderComponent()
  }

  renderComponent() {
    this.goods_category_data.getDecorativeCosmUrl()
      .subscribe(
        response => {
          this.goods = response;
        },
        error => {
          console.log(error)
        }
      )
  }
  getImage(img: string): string {
    return 'url(' + './assets/images/' + img + '.jpg)';
  }

  goToGroupOfGoods(link: any) {
    this.router.navigateByUrl(link);
  }


}
