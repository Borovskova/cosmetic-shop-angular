import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoodsCategoryDataService } from '../goods-category-data.service';

@Component({
  selector: 'app-face-care',
  templateUrl: './face-care.component.html',
  styleUrls: ['./face-care.component.css']
})
export class FaceCareComponent implements OnInit {

  goods: any = [];

  constructor(public goods_category_data: GoodsCategoryDataService, public router: Router) { }

  ngOnInit() {
    this.renderComponent()
  }

  renderComponent(){
    this.goods_category_data.getGuestFaceCareUrl()
    .subscribe(
      response => {
        this.goods = response;
      },
      error => {
        console.log(error)

      }
    )
  }
  goToGroupOfGoods(link: any) {
    this.router.navigateByUrl(link);
  }
}
