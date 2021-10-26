import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-creams',
  templateUrl: './creams.component.html',
  styleUrls: ['./creams.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CreamsComponent implements OnInit {
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
    public cartService: CartService) { }

  ngOnInit(): void {
    this.renderComponent();
    this.auth.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === "true" ? true : false;
  }

  renderComponent(){
    this.goods_category_data.getCreamsUrl()
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
  }

  notifierHidden(){
    this.isNotifierVisible = false;
  }
  notifierLikedHidden(){
    this.isNotifierLikedVisible = false;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
