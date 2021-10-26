import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-liked-goods',
  templateUrl: './liked-goods.component.html',
  styleUrls: ['./liked-goods.component.css']
})
export class LikedGoodsComponent implements OnInit {

  grandTotal !: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts2()
      .subscribe(response => {
        this.cartService.likedProducts = response;
        this.grandTotal = this.cartService.getTotalPrice2();
      })
  }
  removeItem(product: any) {
    this.cartService.removeLikedItem(product);
  }
  makeEmptyLiked() {
    this.cartService.removeAllLiked();
  }
}
