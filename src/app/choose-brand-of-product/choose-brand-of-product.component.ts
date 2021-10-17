import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FilteredGoodsService } from '../filtered-goods.service';

@Component({
  selector: 'app-choose-brand-of-product',
  templateUrl: './choose-brand-of-product.component.html',
  styleUrls: ['./choose-brand-of-product.component.css']
})
export class ChooseBrandOfProductComponent implements OnInit {


  isListVisible = false;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  mascaraCtrl = new FormControl();
  filteredMascara: Observable<string[]>;
  mascaras: string[] = [];
  allMascara: string[] = ['Lancome', 'Dior', 'Max Factor', 'Loreal', 'Viviene Saabo', 'Maybelline'];

  @ViewChild('mascaraInput') mascaraInput: ElementRef<HTMLInputElement>;

  
  constructor(public filtered_goods: FilteredGoodsService) { 

    this.filteredMascara = this.mascaraCtrl.valueChanges.pipe(
      startWith(null),
      map((mascara: string | null) => mascara ? this._filter(mascara) : this.allMascara.slice()));
  }

  ngOnInit(): void {

    
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our mascara
    if (value) {
      this.mascaras.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.mascaraCtrl.setValue(null);
  }

  remove(mascara: string): void {
    const index = this.mascaras.indexOf(mascara);

    if (index >= 0) {
      this.mascaras.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.mascaras.push(event.option.viewValue);
    this.mascaraInput.nativeElement.value = '';
    this.mascaraCtrl.setValue(null);
  }

  public _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allMascara.filter(mascara => mascara.toLowerCase().includes(filterValue));
  }
  showList(){
    this.isListVisible = !this.isListVisible;
  }
  
}
