import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyCareComponent } from '../body-care/body-care.component';
import { DecorativeCosmeticsComponent } from '../decorative-cosmetics/decorative-cosmetics.component';
import { FaceCareComponent } from '../face-care/face-care.component';
import { HairCareComponent } from '../hair-care/hair-care.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { MascaraNewComponent } from '../mascara-new/mascara-new.component';
import { CartComponent } from '../cart/cart.component';
import { LikedGoodsComponent } from '../liked-goods/liked-goods.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreamsComponent } from '../creams/creams.component';





const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  },

  { path: 'search', component: DashboardComponent, children: [{ path: 'search', component: SearchComponent }, { path: '', component: SearchComponent }] },
  { path: 'cart', component: DashboardComponent, children: [{ path: 'cart', component: CartComponent }, { path: '', component: CartComponent }] },
  { path: 'liked-goods', component: DashboardComponent, children: [{ path: 'liked-goods', component: LikedGoodsComponent }, { path: '', component: LikedGoodsComponent }] },
  { path: 'dec-cos', component: DashboardComponent, children: [{ path: 'dec-cos', component: DecorativeCosmeticsComponent }, { path: '', component: DecorativeCosmeticsComponent }] },
  { path: 'face-care', component: DashboardComponent, children: [{ path: 'face-care', component: FaceCareComponent }, { path: '', component: FaceCareComponent }] },
  { path: 'body-care', component: DashboardComponent, children: [{ path: 'body-care', component: BodyCareComponent }, { path: '', component: BodyCareComponent }] },
  { path: 'hair-care', component: DashboardComponent, children: [{ path: 'hair-care', component: HairCareComponent }, { path: '', component: HairCareComponent }] },
  { path: 'mascara', component: DashboardComponent, children: [{ path: 'mascara', component: MascaraNewComponent }, { path: '', component: MascaraNewComponent }] },
  { path: 'creams', component: DashboardComponent, children: [{ path: 'creams', component: CreamsComponent }, { path: '', component: CreamsComponent }] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
