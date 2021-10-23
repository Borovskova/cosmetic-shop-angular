import { Component, OnInit } from '@angular/core';
import { GoodsCategoryDataService } from '../goods-category-data.service';

@Component({
  selector: 'app-face-care',
  templateUrl: './face-care.component.html',
  styleUrls: ['./face-care.component.css']
})
export class FaceCareComponent implements OnInit {

  goods: any = [];

  constructor(public goods_category_data: GoodsCategoryDataService) { }

  ngOnInit() {
    this.renderComponent()
  }

  renderComponent(){
    this.goods_category_data.getGuestFaceCareUrl()
    .subscribe(
      response => {
        this.goods = response;
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
