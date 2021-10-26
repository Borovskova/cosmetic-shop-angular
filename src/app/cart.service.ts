import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([]);

  public cartItemList2:any = [];
  public productList2 = new BehaviorSubject<any>([]);
  products:any = [];
  likedProducts:any = [];
  goodsInCart:any = 0;
  likedGoods:number = 0;

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  getProducts2(){
    return this.productList2.asObservable();
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  setProduct2(product: any){
    this.cartItemList2.push(...product);
    this.productList2.next(product);
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    //localStorage.setItem('quantityGoodsInCart', this.cartItemList.length);        
  }
  addToLiked(product:any){
    this.cartItemList2.push(product);
    this.productList2.next(this.cartItemList2);
    this.getTotalPrice2();
    //localStorage.setItem('quantityGoodsInCart', this.cartItemList.length);      
  }

  getTotalPrice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  getTotalPrice2() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
        this.goodsInCart = this.products.length;
      }
    })
  }
  removeLikedItem(product: any){
    this.cartItemList2.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartItemList2.splice(index, 1);
        this.likedGoods = this.likedProducts.length;
      }
    })
  }

  removeAll(){
    this.cartItemList = [];
    this.goodsInCart = 0;
    this.productList.next(this.cartItemList);
  }
  removeAllLiked(){
    this.cartItemList2 = [];
    this.likedGoods = 0;
    this.productList2.next(this.cartItemList2);
  }
}
