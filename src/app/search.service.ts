import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  //search component
  goods: any = ['Decorative cosmetics', 'Face care', 'Body care', 'Hair care'];
  
 
  
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

  constructor(private breakpointObserver: BreakpointObserver, public router: Router,
     public translate: TranslateService) {
      }

  public _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.goods.filter((category: any) => category.toLowerCase().includes(filterValue))
  }
  showSearchForm() {
    this.isVisibleSearchForm = !this.isVisibleSearchForm;
  }

  storeThemeSelector() {
    console.log('togle work');
    this.isDarkTheme = !this.isDarkTheme;
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
 
  
  displayFn(subjecty: any) {
    return subjecty ? subjecty.appointment : undefined;
  }
}
