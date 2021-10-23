import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { SearchService } from '../search.service';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isDarkTheme: boolean;
  isHandset$: any;
 
 



  constructor(private breakpointObserver: BreakpointObserver,
    public loaderService: LoaderService, public searchService: SearchService,
    public auth: AuthService, public cartService: CartService) { }

  ngOnInit() {
    this.auth.itemSignupMenuValue = "Login";
    this.isDarkTheme = this.searchService.isDarkTheme;
    this.isHandset$ = this.searchService.isHandset$;
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    this.auth.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === "true" ? true : false;
    this.auth.itemSignupMenuValue = localStorage.getItem('itemSignupMenuValue') === "Logout" ? "Logout" : "Login";

    this.cartService.getProducts()
    .subscribe(response => {
      this.cartService.goodsInCart = response.length;
      //this.cartService.goodsInCart =  localStorage.getItem('quantityGoodsInCart');
    })    
    this.cartService.getProducts2()
    .subscribe(response => {
      this.cartService.likedGoods = response.length;
    })    
// this.goodsInCart = this.cartService.products.length;
  }
  logout(){
    this.auth.isUserLoggedIn = false;
    console.log('this.auth.isUserLoggedIn =' + this.auth.isUserLoggedIn);
    
  }
}
