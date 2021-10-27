import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


grandTotal !:number;


  constructor(public cartService : CartService) { }

  ngOnInit(){
    this.cartService.getProducts()
    .subscribe(response => {
      this.cartService.products = response;
      //this.cartService.cartItemList = JSON.parse(localStorage.getItem('listOfGoodsInCart') || '{}');
      console.log(this.cartService.products);
      
      this.grandTotal = this.cartService.getTotalPrice(); 
      // this.cartService.goodsInCart =  localStorage.getItem('quantityGoodsInCart'); 
       //this.cartService.products =  localStorage.getItem('productsInCart'); 
    })
  }
  removeItem(product:any){
this.cartService.removeCartItem(product);
  }
  makeEmptyCart(){
    this.cartService.removeAll();
  }
}
