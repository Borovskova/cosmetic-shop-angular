import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  goods: any = [];
  objectGoods: any = [];
  myControl: any;
  filteredOptions: any;
  _filter: any;
  goods2: any = [];
  isButtonRemoveVisible:boolean;

  @ViewChild('goodsInput') goodsInput: ElementRef<HTMLInputElement>;

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.goods = this.searchService.goods;
    this.goods2 = this.searchService.goods2;
    this.objectGoods = this.searchService.objectGoods;
    this.myControl = this.searchService.myControl;
    this._filter = this.searchService._filter;
    this.isButtonRemoveVisible = this.searchService.isButtonRemoveVisible;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value))
    );
    // this.searchService.showRemoveButton();
  }

  displayFn() {
    return this.searchService.displayFn;
  }
  removeValueInInput() {
    this.goodsInput.nativeElement.value = '';
  }
}
