import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginNotifierComponent } from '../login-notifier/login-notifier.component';




const routes: Routes = [
  { path: '', component: SignUpComponent},
  { path: 'login-notifier', component: LoginNotifierComponent},
  // { path: '**', redirectTo: '/signup' },
  // { path: '', children: [ { path: 'signup', component: SignUpComponent },{ path: '',  component: SignUpComponent },]},
  // { path: 'login-notifier', children: [ { path: 'login-notifier', component: LoginNotifierComponent },]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
