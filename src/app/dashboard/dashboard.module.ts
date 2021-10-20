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
import { MascaraComponent } from '../mascara/mascara.component';
import { MascaraNewComponent } from '../mascara-new/mascara-new.component';
import { CartComponent } from '../cart/cart.component';
import { LikedGoodsComponent } from '../liked-goods/liked-goods.component';
import { SearchService } from '../search.service';
import { GoodsCategoryDataService } from '../goods-category-data.service';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    // AppComponent,
    NavComponent,
    HomeComponent,
    NotifierComponent,
    SearchComponent,
    BodyCareComponent,
    FaceCareComponent,
    HairCareComponent,
    DecorativeCosmeticsComponent,
    MascaraComponent,
    ChooseBrandOfProductComponent,
    MascaraNewComponent,
    CartComponent,
    LikedGoodsComponent,
  ],
  imports: [
     CommonModule,
    BrowserModule,
    DashboardRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClient,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SearchService, GoodsCategoryDataService, AuthService,],
  
})
export class DashboardModule { }
