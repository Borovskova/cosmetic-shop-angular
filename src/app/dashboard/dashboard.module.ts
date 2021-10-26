import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { NotifierComponent } from '../notifier/notifier.component';
import { SearchComponent } from '../search/search.component';
import { BodyCareComponent } from '../body-care/body-care.component';
import { HairCareComponent } from '../hair-care/hair-care.component';
import { FaceCareComponent } from '../face-care/face-care.component';
import { DecorativeCosmeticsComponent } from '../decorative-cosmetics/decorative-cosmetics.component';
import { ChooseBrandOfProductComponent } from '../choose-brand-of-product/choose-brand-of-product.component';
import { MascaraNewComponent } from '../mascara-new/mascara-new.component';
import { CartComponent } from '../cart/cart.component';
import { LikedGoodsComponent } from '../liked-goods/liked-goods.component';
import { SearchService } from '../search.service';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreamsComponent } from '../creams/creams.component';
import { LanguageInterseptor } from '../interseptors/language.interseptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    HomeComponent,
    NotifierComponent,
    SearchComponent,
    BodyCareComponent,
    FaceCareComponent,
    HairCareComponent,
    DecorativeCosmeticsComponent,
    ChooseBrandOfProductComponent,
    MascaraNewComponent,
    CartComponent,
    LikedGoodsComponent,
    CreamsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    },
    })
  ],
  providers: [HttpClientModule, SearchService, GoodsCategoryDataService, AuthService,],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
