import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-mascara-new',
  templateUrl: './mascara-new.component.html',
  styleUrls: ['./mascara-new.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MascaraNewComponent implements OnInit {

  sortedData: any[];
  goods: any = [];
  dataSource: any;
  columnsToDisplay = ['id', 'brand', 'serries', 'price', 'country', 'volume', 'availability'];
  expandedElement: null;
  isNotifierVisible:boolean = false;
  isNotifierLikedVisible:boolean = false;

 
@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(public goods_category_data: GoodsCategoryDataService,
    public auth: AuthService,
    public cartService: CartService) {
    // this.sortedData = this.goods.slice();
  }

  ngOnInit() {
   this.renderComponent();
   this.auth.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === "true" ? true : false;
  }
 
  renderComponent(){
    this.goods_category_data.getGuestMascaraUrl()
    .subscribe(
      response => {
        this.goods = response;
        this.dataSource = new MatTableDataSource(this.goods);
        this.sortedData = this.goods.slice();
        // console.log(this.sortedData)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.goods.forEach((a:any) => {
          Object.assign(a, {quantity: 1, total: a.price});
        })

      },
      error => {
        console.log(error)

      }
    )
  }
 

  addToCart(element:any){
    this.cartService.addToCart(element);  
    this.isNotifierVisible = true;
  }
  addToLiked(element:any){
    this.cartService.addToLiked(element);  
    this.isNotifierLikedVisible = true;
    console.log('liked work');
    this.isNotifierVisible = true;
  }

  notifierHidden(){
    this.isNotifierVisible = false;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getImage(imageName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.png' + ')';
  }
}

