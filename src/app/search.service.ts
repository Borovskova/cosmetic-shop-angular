import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  //search component
  goods: any = [
    'Decorative cosmetics', 'Face care', 'Body care', 'Hair care'];
  goods2: any = [
    { goodsCategory: 'Decorative cosmetics', link: '/search' },
    { goodsCategory: 'Face care', link: '/search' },
    { goodsCategory: 'Body care', link: '/search' },
    { goodsCategory: 'Hair care', link: '/search' },
  ];

  objectGoods: any = [
    { name: 'Mascara', appointment: 'Decorative cosmetics' },
    { name: 'Pomade', appointment: 'Decorative cosmetics' },
    { name: 'Face powder', appointment: 'Decorative cosmetics' },
    { name: 'Hands cream', appointment: 'Body care' },
    { name: 'Body lotion', appointment: 'Body care' },
    { name: 'Soap', appointment: 'Body care' },
    { name: 'Face cream', appointment: 'Face care' },
    { name: 'Eye cream', appointment: 'Face care' },
    { name: 'Face milk', appointment: 'Face care' },
    { name: 'Makeup remover', appointment: 'Face care' },
    { name: 'Shampoo', appointment: 'Hair care' },
    { name: 'Conditioner', appointment: 'Hair care' },
    { name: 'Hair oil', appointment: 'Hair care' },
  ];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  coincidence: any;
  isButtonRemoveVisible:boolean = false;


  //nav component
  isVisibleSearchForm: boolean = false;
  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    @ViewChild('goodsInput') goodsInput: ElementRef<HTMLInputElement>;

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) { }

  public _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.goods.filter((category: any) => category.toLowerCase().includes(filterValue))
  }
  showSearchForm() {
    this.isVisibleSearchForm = !this.isVisibleSearchForm;
  }

  storeThemeSelector() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }

  showGoodsComponent() {
    this.goods.map((category: any) => {
      if (category.toLowerCase() === this.myControl.value.toLowerCase()) {
        this.coincidence = category;
      }
    });
    if (this.coincidence.toLowerCase() === this.goods[0].toLowerCase()) {
      this.router.navigateByUrl('/dashboard/dec-cos');
    } else if (this.coincidence.toLowerCase() === this.goods[1].toLowerCase()) {
      this.router.navigateByUrl('/dashboard/face-care');
    } else if (this.coincidence.toLowerCase() === this.goods[2].toLowerCase()) {
      this.router.navigateByUrl('/dashboard/body-care');
    } else if (this.coincidence.toLowerCase() === this.goods[3].toLowerCase()) {
      this.router.navigateByUrl('/dashboard/hair-care');
    }
    this.isVisibleSearchForm = false;
  }
  // public redirect(){
  //   this.router.navigateByUrl('/dec-cos');
  // }
// showRemoveButton(){
//   console.log(this.goodsInput.nativeElement.value);
  
//   if( this.goodsInput.nativeElement.value.length){
//     this.isButtonRemoveVisible = true;
//   }
// }
  
  displayFn(subjecty: any) {
    return subjecty ? subjecty.appointment : undefined;
  }
}
