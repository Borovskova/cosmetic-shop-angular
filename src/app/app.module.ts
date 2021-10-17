import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { InterceptorService } from './loader/interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from './search.service';
import { BodyCareComponent } from './body-care/body-care.component';
import { FaceCareComponent } from './face-care/face-care.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { DecorativeCosmeticsComponent } from './decorative-cosmetics/decorative-cosmetics.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LoginNotifierComponent } from './login-notifier/login-notifier.component';
import { MascaraComponent } from './mascara/mascara.component';
import { GoodsCategoryDataService } from './goods-category-data.service';
import { ChooseBrandOfProductComponent } from './choose-brand-of-product/choose-brand-of-product.component';
import { MatChipsModule } from '@angular/material/chips';
import { MascaraNewComponent } from './mascara-new/mascara-new.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import { LikedGoodsComponent } from './liked-goods/liked-goods.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotifierComponent,
    SearchComponent,
    BodyCareComponent,
    FaceCareComponent,
    HairCareComponent,
    DecorativeCosmeticsComponent,
    SignUpComponent,
    RegisterComponent,
    LoginNotifierComponent,
    MascaraComponent,
    ChooseBrandOfProductComponent,
    MascaraNewComponent,
    CartComponent,
    LikedGoodsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule
  ],
  providers: [SearchService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true, },
    AuthService, GoodsCategoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
