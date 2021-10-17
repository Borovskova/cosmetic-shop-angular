import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteredGoodsService {
 
  cards: any = [];
 isUseBrandFilter:boolean = false;
  constructor() { }

  searchFilteredGoods(array: any) {
    this.cards.map((card: any) => {
      if (array.includes(card.brandName)) {
        // this.cards = card;
        console.log(this.cards);
      }
    })

  }
}
