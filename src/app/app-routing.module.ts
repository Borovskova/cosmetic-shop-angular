import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyCareComponent } from './body-care/body-care.component';
import { DecorativeCosmeticsComponent } from './decorative-cosmetics/decorative-cosmetics.component';
import { FaceCareComponent } from './face-care/face-care.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterComponent } from './register/register.component';
import { MascaraComponent } from './mascara/mascara.component';
import { MascaraNewComponent } from './mascara-new/mascara-new.component';
import { CartComponent } from './cart/cart.component';
import { LikedGoodsComponent } from './liked-goods/liked-goods.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent},
  { path: 'liked-goods', component: LikedGoodsComponent},
  { path: 'dec-cos', component: DecorativeCosmeticsComponent },
  { path: 'face-care', component: FaceCareComponent },
  { path: 'body-care', component: BodyCareComponent },
  { path: 'hair-care', component: HairCareComponent},
  { path: 'mascara', component: MascaraNewComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
